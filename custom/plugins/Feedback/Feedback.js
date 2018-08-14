Astun.JS.Plugins.installDialog("feedbackDialog", function() {
	return {
		buttons: [
			{
				name: "",
				text: 'GIS Team',
				click: function() {
					var emailTo = 'gis@somecouncil.gov.uk';
					var emailCC = '';
					var emailSub = 'iShareGIS';
					var emailBody = 'Dear Sir/Madam';
					window.open("mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody);
				}
			},{
				name: "",
				text: 'Dave',
				click: function() {
					var emailTo = 'trigger@somecouncil.gov.uk';
					var emailCC = '';
					var emailSub = 'iShareGIS';
					var emailBody = 'Dear Sir';
					location.href = "mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody;
				}
			}
		]
	};
});

Astun.JS.Plugins.installButton(
	{
		name: "feedbackButton",
		type: "quickdialog",
		dialog: Astun.JS.Plugins.dialogs.feedbackDialog,
		hideOnEmptyDialog: false,
		text: 'Feedback',
		tooltip: 'Use these email links to talk to support.',
		tooltipTitle: 'Feedback'		
	}
);