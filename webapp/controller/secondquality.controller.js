sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'com/sap/dmc/secondquality/model/formatter',
    'com/sap/dmc/secondquality/controller/BaseController',
    "sap/base/util/UriParameters"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, formatter,BaseController,UriParameters) {
        "use strict";
        var that = "";
        return BaseController.extend("com.sap.dmc.secondquality.controller.secondquality", {
            formatter : formatter,
            onInit: function () {
                that = this;
              
            that.inputModel = new sap.ui.model.json.JSONModel();
			that.inputModel.setSizeLimit(10000);
			this.getView().setModel(that.inputModel, "inputModel");

            that.workCenterModel = new sap.ui.model.json.JSONModel();
			that.workCenterModel.setSizeLimit(10000);
			this.getView().setModel(that.workCenterModel, "workCenterModel");

            that.orderList = new sap.ui.model.json.JSONModel();
			that.orderList.setSizeLimit(10000);
			this.getView().setModel(that.orderList, "orderList"); 
           
            that.palletStatusModel = new sap.ui.model.json.JSONModel();
			that.palletStatusModel.setSizeLimit(10000);
			this.getView().setModel(that.palletStatusModel, "palletStatusModel");

            var defaultValues = {
				"WORK_CENTER": "MLFPK00",
				"PALLET_STATUS": "EOL Inspected"
			};
			that.inputModel.setData(defaultValues);

            that.setData();
            },

            setData: function () {

                var Panel = {
                    "Panel": [{
                     
                        "SFC": "118475110415",
                        "PROD_DATE": "Mar 07, 2022",
                        "PROD_TIME":"04:47:39",
                        "ITEM":"100-3pcb",
                        "SHOP_ORDER":"2345671",
                        "PALLET_STATUS":"EOL Inspected",
                        "S4_STATUS":"Sucessfull",
                        "STATUS":"In Buffer"
                    }, {
                       
                        "SFC": "118475110420",
                        "PROD_DATE": "Mar 07, 2022",
                        "PROD_TIME":"04:47:35",
                        "ITEM":"100-3pcb",
                        "SHOP_ORDER":"123456",
                        "PALLET_STATUS":"EOL Inspected",
                        "S4_STATUS":"Sucessfull",
                        "STATUS":"In Buffer"
    }, {
                      
                        "SFC": "118475110420",
                        "PROD_DATE": "Mar 07, 2022",
                        "PROD_TIME":"04:47:29",
                        "ITEM":"100-3pcb",
                        "SHOP_ORDER":"2345672",
                        "PALLET_STATUS":"EOL Inspected",
                        "S4_STATUS":"Sucessfull",
                        "STATUS":"In Buffer"
    }, {
                       
                        "SFC": "118475110420",
                        "PROD_DATE": "Mar 07, 2022",
                        "PROD_TIME":"04:47:11",
                        "ITEM":"100-3pcb",
                        "SHOP_ORDER":"2345673",
                        "PALLET_STATUS":"EOL Inspected",
                        "S4_STATUS":"Sucessfull",
                        "STATUS":"In Buffer"
                      }, {
                      
                        "SFC": "118475110420",
                        "PROD_DATE": "Mar 07, 2022",
                        "PROD_TIME":"04:47:48",
                        "ITEM":"100-3pcb",
                        "SHOP_ORDER":"2345674",
                        "PALLET_STATUS":"EOL Inspected",
                        "S4_STATUS":"Sucessfull",
                        "STATUS":"In Buffer"
                    }, {
                        
                        "SFC": "118475110429",
                        "PROD_DATE": "Mar 07, 2022",
                        "PROD_TIME":"04:47:48",
                        "ITEM":"100-3pcb",
                        "SHOP_ORDER":"2345675",
                        "PALLET_STATUS":"EOL Inspected",
                        "S4_STATUS":"Failed",
                        "STATUS":"In Buffer"
                     }, {
                        
                        "SFC": "118475110428",
                        "PROD_DATE": "Mar 07, 2022",
                        "PROD_TIME":"04:47:48",
                        "ITEM":"100-3pcb",
                        "SHOP_ORDER":"2345676",
                        "PALLET_STATUS":"EOL Inspected",
                        "S4_STATUS":"Sucessfull",
                        "STATUS":"In Buffer"
                    }, {
                      
                        "SFC": "118475110427",
                        "PROD_DATE": "Mar 07, 2022",
                        "PROD_TIME":"04:47:48",
                        "ITEM":"100-3pcb",
                        "SHOP_ORDER":"2345677",
                        "PALLET_STATUS":"EOL Inspected",
                        "S4_STATUS":"Sucessfull",
                        "STATUS":"In Buffer"
                     }, {
                       
                        "SFC": "118475110426",
                        "PROD_DATE": "Mar 07, 2022",
                        "PROD_TIME":"04:47:47",
                        "ITEM":"100-3pcb",
                        "SHOP_ORDER":"2345679",
                        "PALLET_STATUS":"EOL Inspected",
                        "S4_STATUS":"Sucessfull",
                        "STATUS":"Sent to CAMS"
                     }, {
                       
                        "SFC": "118475110425",
                        "PROD_DATE": "Mar 07, 2022",
                        "PROD_TIME":"04:47:45",
                        "ITEM":"100-3pcb",
                        "SHOP_ORDER":"2345678",
                        "PALLET_STATUS":"EOL Inspected",
                        "S4_STATUS":"Sucessfull",
                        "STATUS":"Received By CAMS"
                    }]
                };
    
                that.orderList.setData(Panel);


               
			var WorkCenters = {
				"WorkCenters": [{

					"WORK_CENTER": "MLFPK00",
                    "DESCRIPTION":"LMF Packaging"
				}, {

					"WORK_CENTER": "SMLPK00",
                    "DESCRIPTION":"CV Packaging"
				
				}]
			};
			that.workCenterModel.setData(WorkCenters);

            var PalletStatus = {
				"PalletStatus": [{

					"PALLET_STATUS": "EOL Inspected"  
				},
                 {

					"PALLET_STATUS": "Produced"
				},
                {
                   "PALLET_STATUS": "Quality Inspected"
               },
               {
                  "PALLET_STATUS": "Sent to CAMS"
              },
              {
                 "PALLET_STATUS": "Recived by CAMS"
             },
             {
                "PALLET_STATUS": "Scrapped"
            }]
			};
			that.palletStatusModel.setData(PalletStatus);
    
            },

            orderSearch: function(oEvent) {
                
                var aFilter = [];
                var sQuery = this.getView().byId("orderInput").getValue().trim();
    
                if (sQuery != "") {
                    if (sQuery) {
                        aFilter.push(new Filter("SHOP_ORDER", FilterOperator.Contains, sQuery));
                    }
    
                    // filter binding
                    var oList = this.byId("orderTable");
                    var oBinding = oList.getBinding("rows");
                    oBinding.filter(aFilter);
                } else {
                    var sQuery = oEvent.getParameter("query");
                    if (sQuery) {
                        aFilter.push(new Filter("SHOP_ORDER", FilterOperator.Contains, sQuery));
                    }
                    var oList = this.byId("orderTable");
                    var oBinding = oList.getBinding("rows");
                    oBinding.filter(aFilter);
                }
            },
            palletSearch: function(oEvent) {
                
                var aFilter = [];
                var sQuery = this.getView().byId("palletInput").getValue().trim();
    
                if (sQuery != "") {
                    if (sQuery) {
                        aFilter.push(new Filter("SFC", FilterOperator.Contains, sQuery));
                    }
    
                    // filter binding
                    var oList = this.byId("orderTable");
                    var oBinding = oList.getBinding("rows");
                    oBinding.filter(aFilter);
                } else {
                    var sQuery = oEvent.getParameter("query");
                    if (sQuery) {
                        aFilter.push(new Filter("SFC", FilterOperator.Contains, sQuery));
                    }
                    var oList = this.byId("orderTable");
                    var oBinding = oList.getBinding("rows");
                    oBinding.filter(aFilter);
                }
            },
            fnEdit: function () {
                if (!this._oeditDialog) {
                this._oeditDialog = sap.ui.xmlfragment("com.sap.dmc.secondquality.fragment.editPallet", this);
				this.getView().addDependent(this._oeditDialog);
               
                };
                this._oeditDialog.open();

            },
         
         
            loadSFCData: function () {
                var sSFC="MILL5"
                var that = this;
                var oPromise = new Promise(function (resolve, reject) {
                    var oUtil = that.getApplicationUtil();
    
                    // get SFC data (with current operation information).
                    oUtil.getSfcData(sSFC)
                    .then(function (oSfcResults) {
                        // load global model
                        oUtil.getGlobalModel().setProperty("/sfcData", oSfcResults);
                        resolve();
                    }.bind(that))
                    .catch(function (oError) {
                        reject(oError);
                    }.bind(that));
                });
                return oPromise;
            },
            
            fnClose:function(){
                this._oeditDialog.close();
            },
        });
    });