class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы')
		}

		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});

	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)

	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString('ru-RU', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		});

	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			let nowTime = this.getCurrentFormattedTime()
			this.alarmCollection.forEach(alarm => {
				if (nowTime === alarm.time && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback()
				}
			})

		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}