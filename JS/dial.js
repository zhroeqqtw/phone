$(function () {
	checkLogin();

	// 呼叫
	$('#callBtn').on('click', function () {
		var callNum = $('#callNum').val();
		var token = sessionStorage.getItem('token');
		if (!token) {
			location.href = 'login.html';
		}
		if (!validatePhone(callNum)) return;
		$.post(domain + '/phone/call', {
			t: token,
			m: callNum
		}).done(function (res) {
			if (res.status == 0) {
				alert(res.message || '正在呼叫');
			}
		})
	});
});