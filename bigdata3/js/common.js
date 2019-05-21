$(function() {
	// 按钮点击复制
	$('.title-line:nth-child(3) button').click(function() {
		var str = '';
		var arr = $(".code-html code").each(function() {})
		var l = arr.length;
		var n = 0;
		while (n < l) {
			str += arr[n].innerHTML;
			n++;
		}
		
		$(".code-html").before("<input type='text' id='ot'>");
		str = str.replace(/&nbsp;/g, " ");
		str = str.replace(/&lt;/g, "<");
		str = str.replace(/&gt;/g, ">");
		$('#ot').val(str);
		$('#ot').focus();
		$('#ot').select();
		
		document.execCommand('copy');
		$('#ot').remove();

		$('.title-line button').removeClass('copyed');
		$(this).addClass('copyed');
	});
	$('.title-line:nth-child(5) button').click(function() {
		var str = '';
		var arr = $(".code-js code").each(function() {})
		var l = arr.length;
		var n = 0;
		while (n < l) {
			str += arr[n].innerHTML;
			n++;
		}
		
		$(".code-js").before("<input type='text' id='ot'>");
		str = str.replace(/&nbsp;/g, " ");
		str = str.replace(/&lt;/g, "<");
		str = str.replace(/&gt;/g, ">");
		$('#ot').val(str);
		$('#ot').focus();
		$('#ot').select();
		
		document.execCommand('copy');
		$('#ot').remove();
	
		$('.title-line button').removeClass('copyed');
		$(this).addClass('copyed');
	});
})
