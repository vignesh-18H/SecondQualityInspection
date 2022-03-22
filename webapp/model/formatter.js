sap.ui.define([], function () {
	"use strict";
	return {
		
		
		
		getIcon: function (code) {
			if (code) {
				switch (code) {
					case "1":
						return "sap-icon://open-command-field";
						break;
					case "0":
						return "sap-icon://open-command-field";
						break;
				}
			} else {
				return null;
			}
		},
		getButtonColor: function (code) {
			if (code) {
				switch (code) {
					case "1":
						return "Accept";
						break;
					case "0":
						return "Accept";
						break;
				}
			} else {
				return null;
			}
		},
		getVisible: function (code) {
			if (code) {
				switch (code) {
					case "1":
						return true;
						break;

					case "0":
						return true;
						break;
				}
			} else {
				return null;
			}
		},

		
		getLogStatus: function (oStatus) {
			if (oStatus) {
				if (oStatus === "ENABLED" || oStatus === "Enabled") {
					return "Success";
				} else if (oStatus === "DISABLED" || oStatus === "Disabled") {
					return "Error";
				}
			}
		},
		StatusFormatter: function(S4_STATUS){
			if(S4_STATUS === "Sucessfull"){
				return "Success";
			}else{
				return "Error";
			}

		},
        StatusFormatterCAMS: function(STATUS){
			if(STATUS === "In Buffer"){
				return "Warning";
			}else if(STATUS === "Received By CAMS"){
				return "Success";
			}else{
                return "Error";

            }

		},
   		getEnableButton: function(STATUS)
			{
			if(STATUS === "PASSED")
			{
				return false;
			}
			else
			{
				return true;
			}				
 			 }
	};
});