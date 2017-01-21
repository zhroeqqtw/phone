var domain = "http://139.196.144.181:7070";

function validatePhone(num) {
	if (!num) {
		alert('手机号不能为空');
		return false;
	}
	if (!/^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/.test(num)) {
		alert('手机号码不正确');
		return false;
	}
	return true;
}

// 检查登录
function checkLogin() {
	var token = sessionStorage.getItem('token');
	if (!token) {
		location.href = 'login.html';
	}
}

$(function () {
	//登出
	$('#logoutBtn').on('click', function () {
		sessionStorage.removeItem('token');
		location.href = 'login.html';
	});
});