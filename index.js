const fs = require("fs");
const moment = require("moment");
require("moment-timezone");

moment.tz.setDefault("Asia/Seoul");
moment.locale("ko", {
	weekdays: [
		"일요일",
		"월요일",
		"화요일",
		"수요일",
		"목요일",
		"금요일",
		"토요일",
	],
	weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"],
});

const date = `${moment().format("YYYY. MM. DD. (ddd) hh:mm:ss")} KST`;

fs.writeFile("history.log", date, "utf8", function (error) {
	if (error) throw error;
	console.log(`Commit log: ${date}`);
});
