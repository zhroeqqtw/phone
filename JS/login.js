$(function () {
	var token = sessionStorage.getItem('token');
	if (token) {
		location.href = 'dial.html';
	}
	// 获取验证码
	$('#keyBtn').on('click', function () {
		var phoneNum = $('#phoneNum').val();
		if (!validatePhone(phoneNum)) return;
		$.post(domain + '/phone/token', {
			m: phoneNum
		}).done(function (res) {
			if (res.status == 0) {
				$('#keyBtn').attr('disable', true);
			} else {
				alert('验证码获取失败');
			}
		})
	});

	// 登录
	$('#loginBtn').on('click', function () {
		var phoneNum = $('#phoneNum').val();
		var key = $('#key').val();
		if (!validatePhone(phoneNum)) return;
		if (!key) return alert('验证码不能为空');

		$.post(domain + '/phone/login', {
			m: phoneNum,
			code: key
		}).done(function (res) {
			if (res.status == 0) {
				sessionStorage.setItem('token', res.data);
				location.href = 'dial.html';
			} else {
				alert(res.message || '登录失败');
			}
		})

	})

});