$(function () {
	var token = sessionStorage.getItem('token');
	if (token) {
		$('.login-hidden').hide();
	} else {
		$('.login-show').hide();
	}
	// 充值
	$('#rechargeBtn').on('click', function () {
		var phoneNum = $('#phoneNum').val();
		var cardKey = $('#cardKey').val();
		if (!validatePhone(phoneNum)) return;
		if (!cardKey) return alert('卡密不能为空');
		$.post(domain + '/phone/pay', {
			m: phoneNum,
			p: cardKey
		}).done(function (res) {
			if (res.status == 0) {
				alert('充值成功');
			} else {
				alert('充值失败：' + res.message);
			}
		})
	});
});