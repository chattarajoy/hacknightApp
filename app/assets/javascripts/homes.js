/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

$(document).ready(function(){
	$('#submit-button').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		var data = {};
		for(var i=1;i<24;i++){
			data["input-"+i] = $('#input-'+i).val();
		}
		var request = $.ajax({
			async: true,
			type: 'POST',
			url: '/get_treatment_status',
			data: data,
			dataType: "json",
			cache: false,
			beforeSend: function (xhr, settings) {
				$("#treatment_info_form").hide();
				$('.custom-loader').show();
			},
			success: function(data, statusText) {
				// if(dataStoreUrl.indexOf('db_sinks') > -1){
				// 	showDataConnectionMenuList(false);
				// 	saveOrUpdateConnectionCallBack(data, 'connection');
				// }
				// else{
				// 	if(dataStoreRequestType == "PUT"){
				// 		saveOrUpdateCallBackForConnectionTemplates(data, 'access', statusText);
				// 	}
				// 	else{
				// 		saveOrUpdateCallBackForConnectionTemplates(data, 'connection', statusText);
				// 	}
				// }
			},
			error:function(xhr_obj, text_status){
				// var statusText = xhr_obj.statusText;
				// if(typeof statusText != 'undefined' && statusText == "error") {
				// 	$('#connection-details-message').addClass('alert-error').show();
				// 	$('#connection-details-message-text').html(QUBOLE.MESSAGES.DATASTORE_CREATE_ERROR + " " + QUBOLE.MESSAGES.TRY_AGAIN);
				// } else if(typeof statusText != 'undefined') {
				// 	$('#connection-details-message').addClass('alert-error').show();
				// 	$('#connection-details-message-text').html(statusText + ". "+QUBOLE.MESSAGES.TRY_AGAIN+"");
				// }
			},
			complete: function(xhr, textStatus) {
				// $('#frmAddRepository').find('input,button,select').removeAttr('disabled');
				// $('#rightContainer').animate({scrollTop: 0}, 'fast');
				// $('#saveLoading').hide();
			}
		});
	});
});