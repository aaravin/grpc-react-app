// source: service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
var models_pb = require('./models_pb.js');
goog.object.extend(proto, models_pb);
var currency_pb = require('./currency_pb.js');
goog.object.extend(proto, currency_pb);
var currency_codes_pb = require('./currency_codes_pb.js');
goog.object.extend(proto, currency_codes_pb);
var time_pb = require('./time_pb.js');
goog.object.extend(proto, time_pb);
var validation_pb = require('./validation_pb.js');
goog.object.extend(proto, validation_pb);
var error_pb = require('./error_pb.js');
goog.object.extend(proto, error_pb);
var countries_pb = require('./countries_pb.js');
goog.object.extend(proto, countries_pb);
var options_sake_pb = require('./options_sake_pb.js');
goog.object.extend(proto, options_sake_pb);
goog.exportSymbol('proto.squareup.capital.plan.service.ActivatePlanRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ActivatePlanResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.AddPlanPayerRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.AddPlanTagsRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.AllocatePlanRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.AllocatePlanResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ApplyServiceCreditRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.BuyPlanReceivablesRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.Fund', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.CancelPlanRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.CancelPlanResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.CreatePlanRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.CreatePlanRequestV2', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.CreatePlanResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.EmptyResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.FailPlanPaymentRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.FailPlanPaymentResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.GetPlanRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.GetPlanResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.GetTxnRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.GetTxnResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ListActivePlanTokensRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ListActivePlanTokensResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ListPlanPerformancesRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ListPlanPerformancesResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ListPlanTxnsRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ListPlanTxnsResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ListPlansByCustomerRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ListPlansByCustomerResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ListPlansRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ListPlansResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.MakePlanPaymentRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.MakePlanPaymentResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.MakePlanRefundRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.MakePlanRefundResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.OriginatePlanRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.OriginatePlanRequest.Originator', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.OriginatePlanResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.PaymentSchedule', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.PaymentSchedule.PaymentScheduleMethod', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.PlanTerm', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.Product', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.RemovePlanPayerRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.RepaymentTerms', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.RepaymentTerms.PaymentMethod', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ReversePlanPaymentRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.ReversePlanPaymentResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.SearchPlansRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.SearchPlansResponse', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest', null, global);
goog.exportSymbol('proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.AddPlanPayerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.AddPlanPayerRequest.displayName = 'proto.squareup.capital.plan.service.AddPlanPayerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.AllocatePlanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.AllocatePlanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.AllocatePlanRequest.displayName = 'proto.squareup.capital.plan.service.AllocatePlanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.AllocatePlanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.AllocatePlanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.AllocatePlanResponse.displayName = 'proto.squareup.capital.plan.service.AllocatePlanResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.CancelPlanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.CancelPlanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.CancelPlanRequest.displayName = 'proto.squareup.capital.plan.service.CancelPlanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.CancelPlanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.CancelPlanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.CancelPlanResponse.displayName = 'proto.squareup.capital.plan.service.CancelPlanResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.displayName = 'proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.displayName = 'proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.CreatePlanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.CreatePlanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.CreatePlanRequest.displayName = 'proto.squareup.capital.plan.service.CreatePlanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.CreatePlanRequestV2.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.CreatePlanRequestV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.CreatePlanRequestV2.displayName = 'proto.squareup.capital.plan.service.CreatePlanRequestV2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.displayName = 'proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ActivatePlanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.ActivatePlanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ActivatePlanRequest.displayName = 'proto.squareup.capital.plan.service.ActivatePlanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ActivatePlanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.ActivatePlanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ActivatePlanResponse.displayName = 'proto.squareup.capital.plan.service.ActivatePlanResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.PaymentSchedule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.PaymentSchedule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.PaymentSchedule.displayName = 'proto.squareup.capital.plan.service.PaymentSchedule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.Product = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.Product, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.Product.displayName = 'proto.squareup.capital.plan.service.Product';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.PlanTerm = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.PlanTerm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.PlanTerm.displayName = 'proto.squareup.capital.plan.service.PlanTerm';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.RepaymentTerms = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.RepaymentTerms, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.RepaymentTerms.displayName = 'proto.squareup.capital.plan.service.RepaymentTerms';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.CreatePlanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.CreatePlanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.CreatePlanResponse.displayName = 'proto.squareup.capital.plan.service.CreatePlanResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.GetPlanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.GetPlanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.GetPlanRequest.displayName = 'proto.squareup.capital.plan.service.GetPlanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.GetPlanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.GetPlanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.GetPlanResponse.displayName = 'proto.squareup.capital.plan.service.GetPlanResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.ListPlanPerformancesRequest.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.ListPlanPerformancesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ListPlanPerformancesRequest.displayName = 'proto.squareup.capital.plan.service.ListPlanPerformancesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ListPlanPerformancesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.ListPlanPerformancesResponse.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.ListPlanPerformancesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ListPlanPerformancesResponse.displayName = 'proto.squareup.capital.plan.service.ListPlanPerformancesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.ListActivePlanTokensRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ListActivePlanTokensRequest.displayName = 'proto.squareup.capital.plan.service.ListActivePlanTokensRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ListActivePlanTokensResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.ListActivePlanTokensResponse.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.ListActivePlanTokensResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ListActivePlanTokensResponse.displayName = 'proto.squareup.capital.plan.service.ListActivePlanTokensResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ListPlansRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.ListPlansRequest.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.ListPlansRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ListPlansRequest.displayName = 'proto.squareup.capital.plan.service.ListPlansRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ListPlansResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.ListPlansResponse.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.ListPlansResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ListPlansResponse.displayName = 'proto.squareup.capital.plan.service.ListPlansResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.displayName = 'proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.displayName = 'proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.displayName = 'proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ListPlansByCustomerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.ListPlansByCustomerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ListPlansByCustomerRequest.displayName = 'proto.squareup.capital.plan.service.ListPlansByCustomerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ListPlansByCustomerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.ListPlansByCustomerResponse.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.ListPlansByCustomerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ListPlansByCustomerResponse.displayName = 'proto.squareup.capital.plan.service.ListPlansByCustomerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.GetTxnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.GetTxnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.GetTxnRequest.displayName = 'proto.squareup.capital.plan.service.GetTxnRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.GetTxnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.GetTxnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.GetTxnResponse.displayName = 'proto.squareup.capital.plan.service.GetTxnResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.ListPlanTxnsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ListPlanTxnsRequest.displayName = 'proto.squareup.capital.plan.service.ListPlanTxnsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.ListPlanTxnsResponse.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.ListPlanTxnsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ListPlanTxnsResponse.displayName = 'proto.squareup.capital.plan.service.ListPlanTxnsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.MakePlanPaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.MakePlanPaymentRequest.displayName = 'proto.squareup.capital.plan.service.MakePlanPaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.displayName = 'proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.MakePlanPaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.MakePlanPaymentResponse.displayName = 'proto.squareup.capital.plan.service.MakePlanPaymentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.MakePlanRefundRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.MakePlanRefundRequest.displayName = 'proto.squareup.capital.plan.service.MakePlanRefundRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.MakePlanRefundResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.MakePlanRefundResponse.displayName = 'proto.squareup.capital.plan.service.MakePlanRefundResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.OriginatePlanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.OriginatePlanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.OriginatePlanRequest.displayName = 'proto.squareup.capital.plan.service.OriginatePlanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.OriginatePlanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.OriginatePlanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.OriginatePlanResponse.displayName = 'proto.squareup.capital.plan.service.OriginatePlanResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.SearchPlansRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.SearchPlansRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.SearchPlansRequest.displayName = 'proto.squareup.capital.plan.service.SearchPlansRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.SearchPlansResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.SearchPlansResponse.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.SearchPlansResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.SearchPlansResponse.displayName = 'proto.squareup.capital.plan.service.SearchPlansResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.FailPlanPaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.FailPlanPaymentRequest.displayName = 'proto.squareup.capital.plan.service.FailPlanPaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.FailPlanPaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.FailPlanPaymentResponse.displayName = 'proto.squareup.capital.plan.service.FailPlanPaymentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.RemovePlanPayerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.RemovePlanPayerRequest.displayName = 'proto.squareup.capital.plan.service.RemovePlanPayerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.ReversePlanPaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ReversePlanPaymentRequest.displayName = 'proto.squareup.capital.plan.service.ReversePlanPaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.ReversePlanPaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ReversePlanPaymentResponse.displayName = 'proto.squareup.capital.plan.service.ReversePlanPaymentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.displayName = 'proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.displayName = 'proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.capital.plan.service.AddPlanTagsRequest.repeatedFields_, null);
};
goog.inherits(proto.squareup.capital.plan.service.AddPlanTagsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.AddPlanTagsRequest.displayName = 'proto.squareup.capital.plan.service.AddPlanTagsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.ApplyServiceCreditRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.ApplyServiceCreditRequest.displayName = 'proto.squareup.capital.plan.service.ApplyServiceCreditRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.BuyPlanReceivablesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.displayName = 'proto.squareup.capital.plan.service.BuyPlanReceivablesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.squareup.capital.plan.service.EmptyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.capital.plan.service.EmptyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.capital.plan.service.EmptyResponse.displayName = 'proto.squareup.capital.plan.service.EmptyResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.AddPlanPayerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.AddPlanPayerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    planId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    customerId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    isPrimary: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.AddPlanPayerRequest}
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.AddPlanPayerRequest;
  return proto.squareup.capital.plan.service.AddPlanPayerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.AddPlanPayerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.AddPlanPayerRequest}
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPrimary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.AddPlanPayerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.AddPlanPayerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string plan_id = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.getPlanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.AddPlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.setPlanId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.AddPlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.clearPlanId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.hasPlanId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.AddPlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.AddPlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool is_primary = 3;
 * @return {boolean}
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.getIsPrimary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.squareup.capital.plan.service.AddPlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.setIsPrimary = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.AddPlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.clearIsPrimary = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.AddPlanPayerRequest.prototype.hasIsPrimary = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.AllocatePlanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.AllocatePlanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idempotenceToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    planToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.AllocatePlanRequest}
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.AllocatePlanRequest;
  return proto.squareup.capital.plan.service.AllocatePlanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.AllocatePlanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.AllocatePlanRequest}
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotenceToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.AllocatePlanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.AllocatePlanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string idempotence_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.prototype.getIdempotenceToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.AllocatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.prototype.setIdempotenceToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.AllocatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.prototype.clearIdempotenceToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.prototype.hasIdempotenceToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string plan_token = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.AllocatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.AllocatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.AllocatePlanRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.AllocatePlanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.AllocatePlanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.AllocatePlanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.AllocatePlanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && models_pb.Plan.toObject(includeInstance, f),
    txn: (f = msg.getTxn()) && models_pb.Txn.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.AllocatePlanResponse}
 */
proto.squareup.capital.plan.service.AllocatePlanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.AllocatePlanResponse;
  return proto.squareup.capital.plan.service.AllocatePlanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.AllocatePlanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.AllocatePlanResponse}
 */
proto.squareup.capital.plan.service.AllocatePlanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    case 2:
      var value = new models_pb.Txn;
      reader.readMessage(value,models_pb.Txn.deserializeBinaryFromReader);
      msg.setTxn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.AllocatePlanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.AllocatePlanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.AllocatePlanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.AllocatePlanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
  f = message.getTxn();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      models_pb.Txn.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.capital.plan.models.Plan plan = 1;
 * @return {?proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.AllocatePlanResponse.prototype.getPlan = function() {
  return /** @type{?proto.squareup.capital.plan.models.Plan} */ (
    jspb.Message.getWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {?proto.squareup.capital.plan.models.Plan|undefined} value
 * @return {!proto.squareup.capital.plan.service.AllocatePlanResponse} returns this
*/
proto.squareup.capital.plan.service.AllocatePlanResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.AllocatePlanResponse} returns this
 */
proto.squareup.capital.plan.service.AllocatePlanResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.AllocatePlanResponse.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional squareup.capital.plan.models.Txn txn = 2;
 * @return {?proto.squareup.capital.plan.models.Txn}
 */
proto.squareup.capital.plan.service.AllocatePlanResponse.prototype.getTxn = function() {
  return /** @type{?proto.squareup.capital.plan.models.Txn} */ (
    jspb.Message.getWrapperField(this, models_pb.Txn, 2));
};


/**
 * @param {?proto.squareup.capital.plan.models.Txn|undefined} value
 * @return {!proto.squareup.capital.plan.service.AllocatePlanResponse} returns this
*/
proto.squareup.capital.plan.service.AllocatePlanResponse.prototype.setTxn = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.AllocatePlanResponse} returns this
 */
proto.squareup.capital.plan.service.AllocatePlanResponse.prototype.clearTxn = function() {
  return this.setTxn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.AllocatePlanResponse.prototype.hasTxn = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.CancelPlanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.CancelPlanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.CancelPlanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idempotenceToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    planToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    reason: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.CancelPlanRequest}
 */
proto.squareup.capital.plan.service.CancelPlanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.CancelPlanRequest;
  return proto.squareup.capital.plan.service.CancelPlanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.CancelPlanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.CancelPlanRequest}
 */
proto.squareup.capital.plan.service.CancelPlanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotenceToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.CancelPlanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.CancelPlanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.CancelPlanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string idempotence_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.getIdempotenceToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CancelPlanRequest} returns this
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.setIdempotenceToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CancelPlanRequest} returns this
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.clearIdempotenceToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.hasIdempotenceToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string plan_token = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CancelPlanRequest} returns this
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CancelPlanRequest} returns this
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CancelPlanRequest} returns this
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CancelPlanRequest} returns this
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.clearReason = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CancelPlanRequest.prototype.hasReason = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.CancelPlanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.CancelPlanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.CancelPlanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.CancelPlanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && models_pb.Plan.toObject(includeInstance, f),
    txn: (f = msg.getTxn()) && models_pb.Txn.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.CancelPlanResponse}
 */
proto.squareup.capital.plan.service.CancelPlanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.CancelPlanResponse;
  return proto.squareup.capital.plan.service.CancelPlanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.CancelPlanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.CancelPlanResponse}
 */
proto.squareup.capital.plan.service.CancelPlanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    case 2:
      var value = new models_pb.Txn;
      reader.readMessage(value,models_pb.Txn.deserializeBinaryFromReader);
      msg.setTxn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.CancelPlanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.CancelPlanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.CancelPlanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.CancelPlanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
  f = message.getTxn();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      models_pb.Txn.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.capital.plan.models.Plan plan = 1;
 * @return {?proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.CancelPlanResponse.prototype.getPlan = function() {
  return /** @type{?proto.squareup.capital.plan.models.Plan} */ (
    jspb.Message.getWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {?proto.squareup.capital.plan.models.Plan|undefined} value
 * @return {!proto.squareup.capital.plan.service.CancelPlanResponse} returns this
*/
proto.squareup.capital.plan.service.CancelPlanResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CancelPlanResponse} returns this
 */
proto.squareup.capital.plan.service.CancelPlanResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CancelPlanResponse.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional squareup.capital.plan.models.Txn txn = 2;
 * @return {?proto.squareup.capital.plan.models.Txn}
 */
proto.squareup.capital.plan.service.CancelPlanResponse.prototype.getTxn = function() {
  return /** @type{?proto.squareup.capital.plan.models.Txn} */ (
    jspb.Message.getWrapperField(this, models_pb.Txn, 2));
};


/**
 * @param {?proto.squareup.capital.plan.models.Txn|undefined} value
 * @return {!proto.squareup.capital.plan.service.CancelPlanResponse} returns this
*/
proto.squareup.capital.plan.service.CancelPlanResponse.prototype.setTxn = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CancelPlanResponse} returns this
 */
proto.squareup.capital.plan.service.CancelPlanResponse.prototype.clearTxn = function() {
  return this.setTxn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CancelPlanResponse.prototype.hasTxn = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    planToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    newEnabledPaymentSchedule: (f = msg.getNewEnabledPaymentSchedule()) && models_pb.PaymentSchedule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest;
  return proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    case 2:
      var value = new models_pb.PaymentSchedule;
      reader.readMessage(value,models_pb.PaymentSchedule.deserializeBinaryFromReader);
      msg.setNewEnabledPaymentSchedule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewEnabledPaymentSchedule();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      models_pb.PaymentSchedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional string plan_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest} returns this
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest} returns this
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional squareup.capital.plan.models.PaymentSchedule new_enabled_payment_schedule = 2;
 * @return {?proto.squareup.capital.plan.models.PaymentSchedule}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.prototype.getNewEnabledPaymentSchedule = function() {
  return /** @type{?proto.squareup.capital.plan.models.PaymentSchedule} */ (
    jspb.Message.getWrapperField(this, models_pb.PaymentSchedule, 2));
};


/**
 * @param {?proto.squareup.capital.plan.models.PaymentSchedule|undefined} value
 * @return {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest} returns this
*/
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.prototype.setNewEnabledPaymentSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest} returns this
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.prototype.clearNewEnabledPaymentSchedule = function() {
  return this.setNewEnabledPaymentSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest.prototype.hasNewEnabledPaymentSchedule = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && models_pb.Plan.toObject(includeInstance, f),
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    error_pb.Error.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse;
  return proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    case 2:
      var value = new error_pb.Error;
      reader.readMessage(value,error_pb.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.capital.plan.models.Plan plan = 1;
 * @return {?proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.prototype.getPlan = function() {
  return /** @type{?proto.squareup.capital.plan.models.Plan} */ (
    jspb.Message.getWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {?proto.squareup.capital.plan.models.Plan|undefined} value
 * @return {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse} returns this
*/
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse} returns this
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated squareup.connect.v2.resources.Error errors = 2;
 * @return {!Array<!proto.squareup.connect.v2.resources.Error>}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.squareup.connect.v2.resources.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, error_pb.Error, 2));
};


/**
 * @param {!Array<!proto.squareup.connect.v2.resources.Error>} value
 * @return {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse} returns this
*/
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.squareup.connect.v2.resources.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.squareup.connect.v2.resources.Error}
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.squareup.connect.v2.resources.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse} returns this
 */
proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.CreatePlanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.CreatePlanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idempotenceToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    planSchemeName: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    productName: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    productVersion: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    feeAmount: (f = msg.getFeeAmount()) && currency_pb.Money.toObject(includeInstance, f),
    financedAmount: (f = msg.getFinancedAmount()) && currency_pb.Money.toObject(includeInstance, f),
    aprBps: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
    interestRateBps: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    paymentAmount: (f = msg.getPaymentAmount()) && currency_pb.Money.toObject(includeInstance, f),
    numberPaymentPeriods: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    applicationFlowToken: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    amortizationScheduleFinalPaymentAmount: (f = msg.getAmortizationScheduleFinalPaymentAmount()) && currency_pb.Money.toObject(includeInstance, f),
    amortizationScheduleInterestFinanceCharge: (f = msg.getAmortizationScheduleInterestFinanceCharge()) && currency_pb.Money.toObject(includeInstance, f),
    merchantDiscountFee: (f = msg.getMerchantDiscountFee()) && currency_pb.Money.toObject(includeInstance, f),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 15, 840),
    createReason: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
    customerToken: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
    applicationToken: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
    businessOfferSetToken: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    countryCode: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.CreatePlanRequest;
  return proto.squareup.capital.plan.service.CreatePlanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotenceToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanSchemeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductVersion(value);
      break;
    case 5:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setFeeAmount(value);
      break;
    case 6:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setFinancedAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAprBps(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInterestRateBps(value);
      break;
    case 9:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setPaymentAmount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumberPaymentPeriods(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationFlowToken(value);
      break;
    case 12:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setAmortizationScheduleFinalPaymentAmount(value);
      break;
    case 13:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setAmortizationScheduleInterestFinanceCharge(value);
      break;
    case 14:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setMerchantDiscountFee(value);
      break;
    case 15:
      var value = /** @type {!proto.squareup.common.CurrencyCode} */ (reader.readEnum());
      msg.setCurrencyCode(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateReason(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerToken(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationToken(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessOfferSetToken(value);
      break;
    case 20:
      var value = /** @type {!proto.squareup.common.countries.Country} */ (reader.readEnum());
      msg.setCountryCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.CreatePlanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.CreatePlanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFeeAmount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getFinancedAmount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getPaymentAmount();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAmortizationScheduleFinalPaymentAmount();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getAmortizationScheduleInterestFinanceCharge();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getMerchantDiscountFee();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.squareup.common.CurrencyCode} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeString(
      18,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
      19,
      f
    );
  }
  f = /** @type {!proto.squareup.common.countries.Country} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeEnum(
      20,
      f
    );
  }
};


/**
 * optional string idempotence_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getIdempotenceToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setIdempotenceToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearIdempotenceToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasIdempotenceToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string plan_scheme_name = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getPlanSchemeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setPlanSchemeName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearPlanSchemeName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasPlanSchemeName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string product_name = 3;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getProductName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setProductName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearProductName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasProductName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string product_version = 4;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getProductVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setProductVersion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearProductVersion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasProductVersion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional squareup.common.Money fee_amount = 5;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getFeeAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 5));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
*/
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setFeeAmount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearFeeAmount = function() {
  return this.setFeeAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasFeeAmount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional squareup.common.Money financed_amount = 6;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getFinancedAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 6));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
*/
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setFinancedAmount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearFinancedAmount = function() {
  return this.setFinancedAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasFinancedAmount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double apr_bps = 7;
 * @return {number}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getAprBps = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setAprBps = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearAprBps = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasAprBps = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double interest_rate_bps = 8;
 * @return {number}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getInterestRateBps = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setInterestRateBps = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearInterestRateBps = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasInterestRateBps = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional squareup.common.Money payment_amount = 9;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getPaymentAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 9));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
*/
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setPaymentAmount = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearPaymentAmount = function() {
  return this.setPaymentAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasPaymentAmount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 number_payment_periods = 10;
 * @return {number}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getNumberPaymentPeriods = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setNumberPaymentPeriods = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearNumberPaymentPeriods = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasNumberPaymentPeriods = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string application_flow_token = 11;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getApplicationFlowToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setApplicationFlowToken = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearApplicationFlowToken = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasApplicationFlowToken = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional squareup.common.Money amortization_schedule_final_payment_amount = 12;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getAmortizationScheduleFinalPaymentAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 12));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
*/
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setAmortizationScheduleFinalPaymentAmount = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearAmortizationScheduleFinalPaymentAmount = function() {
  return this.setAmortizationScheduleFinalPaymentAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasAmortizationScheduleFinalPaymentAmount = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional squareup.common.Money amortization_schedule_interest_finance_charge = 13;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getAmortizationScheduleInterestFinanceCharge = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 13));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
*/
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setAmortizationScheduleInterestFinanceCharge = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearAmortizationScheduleInterestFinanceCharge = function() {
  return this.setAmortizationScheduleInterestFinanceCharge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasAmortizationScheduleInterestFinanceCharge = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional squareup.common.Money merchant_discount_fee = 14;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getMerchantDiscountFee = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 14));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
*/
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setMerchantDiscountFee = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearMerchantDiscountFee = function() {
  return this.setMerchantDiscountFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasMerchantDiscountFee = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional squareup.common.CurrencyCode currency_code = 15;
 * @return {!proto.squareup.common.CurrencyCode}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getCurrencyCode = function() {
  return /** @type {!proto.squareup.common.CurrencyCode} */ (jspb.Message.getFieldWithDefault(this, 15, 840));
};


/**
 * @param {!proto.squareup.common.CurrencyCode} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearCurrencyCode = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasCurrencyCode = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string create_reason = 16;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getCreateReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setCreateReason = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearCreateReason = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasCreateReason = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string customer_token = 17;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getCustomerToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setCustomerToken = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearCustomerToken = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasCustomerToken = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string application_token = 18;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getApplicationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setApplicationToken = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearApplicationToken = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasApplicationToken = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string business_offer_set_token = 19;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getBusinessOfferSetToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setBusinessOfferSetToken = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearBusinessOfferSetToken = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasBusinessOfferSetToken = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional squareup.common.countries.Country country_code = 20;
 * @return {!proto.squareup.common.countries.Country}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.getCountryCode = function() {
  return /** @type {!proto.squareup.common.countries.Country} */ (jspb.Message.getFieldWithDefault(this, 20, 840));
};


/**
 * @param {!proto.squareup.common.countries.Country} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.setCountryCode = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.clearCountryCode = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequest.prototype.hasCountryCode = function() {
  return jspb.Message.getField(this, 20) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.repeatedFields_ = [22,24];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.CreatePlanRequestV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequestV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    idempotenceToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    currencyCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    planTerm: (f = msg.getPlanTerm()) && proto.squareup.capital.plan.service.PlanTerm.toObject(includeInstance, f),
    payerCustomerToken: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    offerSetToken: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    product: (f = msg.getProduct()) && proto.squareup.capital.plan.service.Product.toObject(includeInstance, f),
    paymentSchedule: (f = msg.getPaymentSchedule()) && proto.squareup.capital.plan.service.PaymentSchedule.toObject(includeInstance, f),
    originator: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    applicationFlowToken: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
    tagsList: (f = jspb.Message.getRepeatedField(msg, 22)) == null ? undefined : f,
    countryCode: (f = jspb.Message.getField(msg, 23)) == null ? undefined : f,
    planMetadataList: jspb.Message.toObjectList(msg.getPlanMetadataList(),
    models_pb.PlanMetadata.toObject, includeInstance),
    paymentScheduleV2: (f = msg.getPaymentScheduleV2()) && models_pb.PaymentSchedule.toObject(includeInstance, f),
    legalEntityIdentifier: (f = msg.getLegalEntityIdentifier()) && proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.CreatePlanRequestV2;
  return proto.squareup.capital.plan.service.CreatePlanRequestV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequestV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotenceToken(value);
      break;
    case 2:
      var value = /** @type {!proto.squareup.common.CurrencyCode} */ (reader.readEnum());
      msg.setCurrencyCode(value);
      break;
    case 3:
      var value = new proto.squareup.capital.plan.service.PlanTerm;
      reader.readMessage(value,proto.squareup.capital.plan.service.PlanTerm.deserializeBinaryFromReader);
      msg.setPlanTerm(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayerCustomerToken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfferSetToken(value);
      break;
    case 6:
      var value = new proto.squareup.capital.plan.service.Product;
      reader.readMessage(value,proto.squareup.capital.plan.service.Product.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 7:
      var value = new proto.squareup.capital.plan.service.PaymentSchedule;
      reader.readMessage(value,proto.squareup.capital.plan.service.PaymentSchedule.deserializeBinaryFromReader);
      msg.setPaymentSchedule(value);
      break;
    case 8:
      var value = /** @type {!proto.squareup.capital.common.Originator} */ (reader.readEnum());
      msg.setOriginator(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationFlowToken(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 23:
      var value = /** @type {!proto.squareup.common.countries.Country} */ (reader.readEnum());
      msg.setCountryCode(value);
      break;
    case 24:
      var value = new models_pb.PlanMetadata;
      reader.readMessage(value,models_pb.PlanMetadata.deserializeBinaryFromReader);
      msg.addPlanMetadata(value);
      break;
    case 25:
      var value = new models_pb.PaymentSchedule;
      reader.readMessage(value,models_pb.PaymentSchedule.deserializeBinaryFromReader);
      msg.setPaymentScheduleV2(value);
      break;
    case 26:
      var value = new proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier;
      reader.readMessage(value,proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.deserializeBinaryFromReader);
      msg.setLegalEntityIdentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.CreatePlanRequestV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequestV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.squareup.common.CurrencyCode} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPlanTerm();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.squareup.capital.plan.service.PlanTerm.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.squareup.capital.plan.service.Product.serializeBinaryToWriter
    );
  }
  f = message.getPaymentSchedule();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.squareup.capital.plan.service.PaymentSchedule.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.squareup.capital.common.Originator} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      22,
      f
    );
  }
  f = /** @type {!proto.squareup.common.countries.Country} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeEnum(
      23,
      f
    );
  }
  f = message.getPlanMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      models_pb.PlanMetadata.serializeBinaryToWriter
    );
  }
  f = message.getPaymentScheduleV2();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      models_pb.PaymentSchedule.serializeBinaryToWriter
    );
  }
  f = message.getLegalEntityIdentifier();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    structureToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    entityToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    version: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier;
  return proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStructureToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeSint32(
      3,
      f
    );
  }
};


/**
 * optional string structure_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.getStructureToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.setStructureToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.clearStructureToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.hasStructureToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string entity_token = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.getEntityToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.setEntityToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.clearEntityToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.hasEntityToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional sint32 version = 3;
 * @return {number}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string idempotence_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getIdempotenceToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setIdempotenceToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearIdempotenceToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.hasIdempotenceToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional squareup.common.CurrencyCode currency_code = 2;
 * @return {!proto.squareup.common.CurrencyCode}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getCurrencyCode = function() {
  return /** @type {!proto.squareup.common.CurrencyCode} */ (jspb.Message.getFieldWithDefault(this, 2, 784));
};


/**
 * @param {!proto.squareup.common.CurrencyCode} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearCurrencyCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.hasCurrencyCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PlanTerm plan_term = 3;
 * @return {?proto.squareup.capital.plan.service.PlanTerm}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getPlanTerm = function() {
  return /** @type{?proto.squareup.capital.plan.service.PlanTerm} */ (
    jspb.Message.getWrapperField(this, proto.squareup.capital.plan.service.PlanTerm, 3));
};


/**
 * @param {?proto.squareup.capital.plan.service.PlanTerm|undefined} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
*/
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setPlanTerm = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearPlanTerm = function() {
  return this.setPlanTerm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.hasPlanTerm = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string payer_customer_token = 4;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getPayerCustomerToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setPayerCustomerToken = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearPayerCustomerToken = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.hasPayerCustomerToken = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string offer_set_token = 5;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getOfferSetToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setOfferSetToken = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearOfferSetToken = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.hasOfferSetToken = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Product product = 6;
 * @return {?proto.squareup.capital.plan.service.Product}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getProduct = function() {
  return /** @type{?proto.squareup.capital.plan.service.Product} */ (
    jspb.Message.getWrapperField(this, proto.squareup.capital.plan.service.Product, 6));
};


/**
 * @param {?proto.squareup.capital.plan.service.Product|undefined} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
*/
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PaymentSchedule payment_schedule = 7;
 * @return {?proto.squareup.capital.plan.service.PaymentSchedule}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getPaymentSchedule = function() {
  return /** @type{?proto.squareup.capital.plan.service.PaymentSchedule} */ (
    jspb.Message.getWrapperField(this, proto.squareup.capital.plan.service.PaymentSchedule, 7));
};


/**
 * @param {?proto.squareup.capital.plan.service.PaymentSchedule|undefined} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
*/
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setPaymentSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearPaymentSchedule = function() {
  return this.setPaymentSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.hasPaymentSchedule = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional squareup.capital.common.Originator originator = 8;
 * @return {!proto.squareup.capital.common.Originator}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getOriginator = function() {
  return /** @type {!proto.squareup.capital.common.Originator} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.squareup.capital.common.Originator} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setOriginator = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearOriginator = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.hasOriginator = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string application_flow_token = 21;
 * @return {string}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getApplicationFlowToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setApplicationFlowToken = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearApplicationFlowToken = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.hasApplicationFlowToken = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * repeated string tags = 22;
 * @return {!Array<string>}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 22));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 22, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 22, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional squareup.common.countries.Country country_code = 23;
 * @return {!proto.squareup.common.countries.Country}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getCountryCode = function() {
  return /** @type {!proto.squareup.common.countries.Country} */ (jspb.Message.getFieldWithDefault(this, 23, 840));
};


/**
 * @param {!proto.squareup.common.countries.Country} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setCountryCode = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearCountryCode = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.hasCountryCode = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * repeated squareup.capital.plan.models.PlanMetadata plan_metadata = 24;
 * @return {!Array<!proto.squareup.capital.plan.models.PlanMetadata>}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getPlanMetadataList = function() {
  return /** @type{!Array<!proto.squareup.capital.plan.models.PlanMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, models_pb.PlanMetadata, 24));
};


/**
 * @param {!Array<!proto.squareup.capital.plan.models.PlanMetadata>} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
*/
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setPlanMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.squareup.capital.plan.models.PlanMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.models.PlanMetadata}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.addPlanMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.squareup.capital.plan.models.PlanMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearPlanMetadataList = function() {
  return this.setPlanMetadataList([]);
};


/**
 * optional squareup.capital.plan.models.PaymentSchedule payment_schedule_v2 = 25;
 * @return {?proto.squareup.capital.plan.models.PaymentSchedule}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getPaymentScheduleV2 = function() {
  return /** @type{?proto.squareup.capital.plan.models.PaymentSchedule} */ (
    jspb.Message.getWrapperField(this, models_pb.PaymentSchedule, 25));
};


/**
 * @param {?proto.squareup.capital.plan.models.PaymentSchedule|undefined} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
*/
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setPaymentScheduleV2 = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearPaymentScheduleV2 = function() {
  return this.setPaymentScheduleV2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.hasPaymentScheduleV2 = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional LegalEntityIdentifier legal_entity_identifier = 26;
 * @return {?proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.getLegalEntityIdentifier = function() {
  return /** @type{?proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier, 26));
};


/**
 * @param {?proto.squareup.capital.plan.service.CreatePlanRequestV2.LegalEntityIdentifier|undefined} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
*/
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.setLegalEntityIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanRequestV2} returns this
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.clearLegalEntityIdentifier = function() {
  return this.setLegalEntityIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanRequestV2.prototype.hasLegalEntityIdentifier = function() {
  return jspb.Message.getField(this, 26) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ActivatePlanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ActivatePlanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ActivatePlanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ActivatePlanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    planToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ActivatePlanRequest}
 */
proto.squareup.capital.plan.service.ActivatePlanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ActivatePlanRequest;
  return proto.squareup.capital.plan.service.ActivatePlanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ActivatePlanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ActivatePlanRequest}
 */
proto.squareup.capital.plan.service.ActivatePlanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ActivatePlanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ActivatePlanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ActivatePlanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ActivatePlanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string plan_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.ActivatePlanRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.ActivatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.ActivatePlanRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ActivatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.ActivatePlanRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ActivatePlanRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ActivatePlanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ActivatePlanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ActivatePlanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ActivatePlanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && models_pb.Plan.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ActivatePlanResponse}
 */
proto.squareup.capital.plan.service.ActivatePlanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ActivatePlanResponse;
  return proto.squareup.capital.plan.service.ActivatePlanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ActivatePlanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ActivatePlanResponse}
 */
proto.squareup.capital.plan.service.ActivatePlanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ActivatePlanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ActivatePlanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ActivatePlanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ActivatePlanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.capital.plan.models.Plan plan = 1;
 * @return {?proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.ActivatePlanResponse.prototype.getPlan = function() {
  return /** @type{?proto.squareup.capital.plan.models.Plan} */ (
    jspb.Message.getWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {?proto.squareup.capital.plan.models.Plan|undefined} value
 * @return {!proto.squareup.capital.plan.service.ActivatePlanResponse} returns this
*/
proto.squareup.capital.plan.service.ActivatePlanResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ActivatePlanResponse} returns this
 */
proto.squareup.capital.plan.service.ActivatePlanResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ActivatePlanResponse.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.PaymentSchedule.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.PaymentSchedule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.PaymentSchedule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.PaymentSchedule.toObject = function(includeInstance, msg) {
  var f, obj = {
    recurrenceRule: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    paymentScheduleMethod: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.PaymentSchedule}
 */
proto.squareup.capital.plan.service.PaymentSchedule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.PaymentSchedule;
  return proto.squareup.capital.plan.service.PaymentSchedule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.PaymentSchedule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.PaymentSchedule}
 */
proto.squareup.capital.plan.service.PaymentSchedule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecurrenceRule(value);
      break;
    case 2:
      var value = /** @type {!proto.squareup.capital.plan.service.PaymentSchedule.PaymentScheduleMethod} */ (reader.readEnum());
      msg.setPaymentScheduleMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.PaymentSchedule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.PaymentSchedule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.PaymentSchedule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.PaymentSchedule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.squareup.capital.plan.service.PaymentSchedule.PaymentScheduleMethod} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.squareup.capital.plan.service.PaymentSchedule.PaymentScheduleMethod = {
  PSM_DO_NOT_USE: 0,
  AUTOMATIC: 1,
  MAIL: 2,
  MANUAL_ELECTRONIC: 3,
  MANUAL_MAIL: 4
};

/**
 * optional string recurrence_rule = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.PaymentSchedule.prototype.getRecurrenceRule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.PaymentSchedule} returns this
 */
proto.squareup.capital.plan.service.PaymentSchedule.prototype.setRecurrenceRule = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PaymentSchedule} returns this
 */
proto.squareup.capital.plan.service.PaymentSchedule.prototype.clearRecurrenceRule = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PaymentSchedule.prototype.hasRecurrenceRule = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PaymentScheduleMethod payment_schedule_method = 2;
 * @return {!proto.squareup.capital.plan.service.PaymentSchedule.PaymentScheduleMethod}
 */
proto.squareup.capital.plan.service.PaymentSchedule.prototype.getPaymentScheduleMethod = function() {
  return /** @type {!proto.squareup.capital.plan.service.PaymentSchedule.PaymentScheduleMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.squareup.capital.plan.service.PaymentSchedule.PaymentScheduleMethod} value
 * @return {!proto.squareup.capital.plan.service.PaymentSchedule} returns this
 */
proto.squareup.capital.plan.service.PaymentSchedule.prototype.setPaymentScheduleMethod = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PaymentSchedule} returns this
 */
proto.squareup.capital.plan.service.PaymentSchedule.prototype.clearPaymentScheduleMethod = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PaymentSchedule.prototype.hasPaymentScheduleMethod = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.Product.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.Product.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.Product} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.Product.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    version: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.Product}
 */
proto.squareup.capital.plan.service.Product.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.Product;
  return proto.squareup.capital.plan.service.Product.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.Product} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.Product}
 */
proto.squareup.capital.plan.service.Product.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.Product.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.Product.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.Product} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.Product.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.Product.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.Product} returns this
 */
proto.squareup.capital.plan.service.Product.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.Product} returns this
 */
proto.squareup.capital.plan.service.Product.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.Product.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.Product.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.Product} returns this
 */
proto.squareup.capital.plan.service.Product.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.Product} returns this
 */
proto.squareup.capital.plan.service.Product.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.Product.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.PlanTerm.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.PlanTerm} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.PlanTerm.toObject = function(includeInstance, msg) {
  var f, obj = {
    feeAmount: (f = msg.getFeeAmount()) && currency_pb.Money.toObject(includeInstance, f),
    financedAmount: (f = msg.getFinancedAmount()) && currency_pb.Money.toObject(includeInstance, f),
    aprBps: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    interestRateBps: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    amortizationScheduleFinalPaymentAmount: (f = msg.getAmortizationScheduleFinalPaymentAmount()) && currency_pb.Money.toObject(includeInstance, f),
    amortizationScheduleInterestFinanceCharge: (f = msg.getAmortizationScheduleInterestFinanceCharge()) && currency_pb.Money.toObject(includeInstance, f),
    merchantDiscountCents: (f = msg.getMerchantDiscountCents()) && currency_pb.Money.toObject(includeInstance, f),
    repaymentTerms: (f = msg.getRepaymentTerms()) && proto.squareup.capital.plan.service.RepaymentTerms.toObject(includeInstance, f),
    firstObligationDueAt: (f = msg.getFirstObligationDueAt()) && time_pb.DateTime.toObject(includeInstance, f),
    maturityAt: (f = msg.getMaturityAt()) && time_pb.DateTime.toObject(includeInstance, f),
    paymentObligationAmount: (f = msg.getPaymentObligationAmount()) && currency_pb.Money.toObject(includeInstance, f),
    timezone: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    paymentPeriod: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    paymentPeriodLength: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    paymentRatioInverse: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
    creditLimitAmount: (f = msg.getCreditLimitAmount()) && currency_pb.Money.toObject(includeInstance, f),
    numberDeferredObligations: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
    obligationCalculationStartAt: (f = msg.getObligationCalculationStartAt()) && time_pb.DateTime.toObject(includeInstance, f),
    penaltyRateBps: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    penaltyAmount: (f = msg.getPenaltyAmount()) && currency_pb.Money.toObject(includeInstance, f),
    maturityTermLength: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
    maturityTermUnit: (f = jspb.Message.getField(msg, 22)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.PlanTerm}
 */
proto.squareup.capital.plan.service.PlanTerm.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.PlanTerm;
  return proto.squareup.capital.plan.service.PlanTerm.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.PlanTerm} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.PlanTerm}
 */
proto.squareup.capital.plan.service.PlanTerm.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setFeeAmount(value);
      break;
    case 2:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setFinancedAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAprBps(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInterestRateBps(value);
      break;
    case 5:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setAmortizationScheduleFinalPaymentAmount(value);
      break;
    case 6:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setAmortizationScheduleInterestFinanceCharge(value);
      break;
    case 7:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setMerchantDiscountCents(value);
      break;
    case 8:
      var value = new proto.squareup.capital.plan.service.RepaymentTerms;
      reader.readMessage(value,proto.squareup.capital.plan.service.RepaymentTerms.deserializeBinaryFromReader);
      msg.setRepaymentTerms(value);
      break;
    case 9:
      var value = new time_pb.DateTime;
      reader.readMessage(value,time_pb.DateTime.deserializeBinaryFromReader);
      msg.setFirstObligationDueAt(value);
      break;
    case 10:
      var value = new time_pb.DateTime;
      reader.readMessage(value,time_pb.DateTime.deserializeBinaryFromReader);
      msg.setMaturityAt(value);
      break;
    case 11:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setPaymentObligationAmount(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 13:
      var value = /** @type {!proto.squareup.capital.common.PaymentPeriod} */ (reader.readEnum());
      msg.setPaymentPeriod(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaymentPeriodLength(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaymentRatioInverse(value);
      break;
    case 16:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setCreditLimitAmount(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberDeferredObligations(value);
      break;
    case 18:
      var value = new time_pb.DateTime;
      reader.readMessage(value,time_pb.DateTime.deserializeBinaryFromReader);
      msg.setObligationCalculationStartAt(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPenaltyRateBps(value);
      break;
    case 20:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setPenaltyAmount(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaturityTermLength(value);
      break;
    case 22:
      var value = /** @type {!proto.squareup.capital.common.MaturityTermUnit} */ (reader.readEnum());
      msg.setMaturityTermUnit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.PlanTerm.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.PlanTerm} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.PlanTerm.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeeAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getFinancedAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getAmortizationScheduleFinalPaymentAmount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getAmortizationScheduleInterestFinanceCharge();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getMerchantDiscountCents();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getRepaymentTerms();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.squareup.capital.plan.service.RepaymentTerms.serializeBinaryToWriter
    );
  }
  f = message.getFirstObligationDueAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      time_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getMaturityAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      time_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getPaymentObligationAmount();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {!proto.squareup.capital.common.PaymentPeriod} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getCreditLimitAmount();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getObligationCalculationStartAt();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      time_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getPenaltyAmount();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeInt32(
      21,
      f
    );
  }
  f = /** @type {!proto.squareup.capital.common.MaturityTermUnit} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeEnum(
      22,
      f
    );
  }
};


/**
 * optional squareup.common.Money fee_amount = 1;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getFeeAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 1));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
*/
proto.squareup.capital.plan.service.PlanTerm.prototype.setFeeAmount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearFeeAmount = function() {
  return this.setFeeAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasFeeAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional squareup.common.Money financed_amount = 2;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getFinancedAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 2));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
*/
proto.squareup.capital.plan.service.PlanTerm.prototype.setFinancedAmount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearFinancedAmount = function() {
  return this.setFinancedAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasFinancedAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double apr_bps = 3;
 * @return {number}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getAprBps = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.setAprBps = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearAprBps = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasAprBps = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double interest_rate_bps = 4;
 * @return {number}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getInterestRateBps = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.setInterestRateBps = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearInterestRateBps = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasInterestRateBps = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional squareup.common.Money amortization_schedule_final_payment_amount = 5;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getAmortizationScheduleFinalPaymentAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 5));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
*/
proto.squareup.capital.plan.service.PlanTerm.prototype.setAmortizationScheduleFinalPaymentAmount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearAmortizationScheduleFinalPaymentAmount = function() {
  return this.setAmortizationScheduleFinalPaymentAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasAmortizationScheduleFinalPaymentAmount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional squareup.common.Money amortization_schedule_interest_finance_charge = 6;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getAmortizationScheduleInterestFinanceCharge = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 6));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
*/
proto.squareup.capital.plan.service.PlanTerm.prototype.setAmortizationScheduleInterestFinanceCharge = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearAmortizationScheduleInterestFinanceCharge = function() {
  return this.setAmortizationScheduleInterestFinanceCharge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasAmortizationScheduleInterestFinanceCharge = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional squareup.common.Money merchant_discount_cents = 7;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getMerchantDiscountCents = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 7));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
*/
proto.squareup.capital.plan.service.PlanTerm.prototype.setMerchantDiscountCents = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearMerchantDiscountCents = function() {
  return this.setMerchantDiscountCents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasMerchantDiscountCents = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RepaymentTerms repayment_terms = 8;
 * @return {?proto.squareup.capital.plan.service.RepaymentTerms}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getRepaymentTerms = function() {
  return /** @type{?proto.squareup.capital.plan.service.RepaymentTerms} */ (
    jspb.Message.getWrapperField(this, proto.squareup.capital.plan.service.RepaymentTerms, 8));
};


/**
 * @param {?proto.squareup.capital.plan.service.RepaymentTerms|undefined} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
*/
proto.squareup.capital.plan.service.PlanTerm.prototype.setRepaymentTerms = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearRepaymentTerms = function() {
  return this.setRepaymentTerms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasRepaymentTerms = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional squareup.common.time.DateTime first_obligation_due_at = 9;
 * @return {?proto.squareup.common.time.DateTime}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getFirstObligationDueAt = function() {
  return /** @type{?proto.squareup.common.time.DateTime} */ (
    jspb.Message.getWrapperField(this, time_pb.DateTime, 9));
};


/**
 * @param {?proto.squareup.common.time.DateTime|undefined} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
*/
proto.squareup.capital.plan.service.PlanTerm.prototype.setFirstObligationDueAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearFirstObligationDueAt = function() {
  return this.setFirstObligationDueAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasFirstObligationDueAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional squareup.common.time.DateTime maturity_at = 10;
 * @return {?proto.squareup.common.time.DateTime}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getMaturityAt = function() {
  return /** @type{?proto.squareup.common.time.DateTime} */ (
    jspb.Message.getWrapperField(this, time_pb.DateTime, 10));
};


/**
 * @param {?proto.squareup.common.time.DateTime|undefined} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
*/
proto.squareup.capital.plan.service.PlanTerm.prototype.setMaturityAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearMaturityAt = function() {
  return this.setMaturityAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasMaturityAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional squareup.common.Money payment_obligation_amount = 11;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getPaymentObligationAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 11));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
*/
proto.squareup.capital.plan.service.PlanTerm.prototype.setPaymentObligationAmount = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearPaymentObligationAmount = function() {
  return this.setPaymentObligationAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasPaymentObligationAmount = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string timezone = 12;
 * @return {string}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.setTimezone = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearTimezone = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasTimezone = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional squareup.capital.common.PaymentPeriod payment_period = 13;
 * @return {!proto.squareup.capital.common.PaymentPeriod}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getPaymentPeriod = function() {
  return /** @type {!proto.squareup.capital.common.PaymentPeriod} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.squareup.capital.common.PaymentPeriod} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.setPaymentPeriod = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearPaymentPeriod = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasPaymentPeriod = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 payment_period_length = 14;
 * @return {number}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getPaymentPeriodLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.setPaymentPeriodLength = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearPaymentPeriodLength = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasPaymentPeriodLength = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 payment_ratio_inverse = 15;
 * @return {number}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getPaymentRatioInverse = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.setPaymentRatioInverse = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearPaymentRatioInverse = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasPaymentRatioInverse = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional squareup.common.Money credit_limit_amount = 16;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getCreditLimitAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 16));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
*/
proto.squareup.capital.plan.service.PlanTerm.prototype.setCreditLimitAmount = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearCreditLimitAmount = function() {
  return this.setCreditLimitAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasCreditLimitAmount = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int32 number_deferred_obligations = 17;
 * @return {number}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getNumberDeferredObligations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.setNumberDeferredObligations = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearNumberDeferredObligations = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasNumberDeferredObligations = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional squareup.common.time.DateTime obligation_calculation_start_at = 18;
 * @return {?proto.squareup.common.time.DateTime}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getObligationCalculationStartAt = function() {
  return /** @type{?proto.squareup.common.time.DateTime} */ (
    jspb.Message.getWrapperField(this, time_pb.DateTime, 18));
};


/**
 * @param {?proto.squareup.common.time.DateTime|undefined} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
*/
proto.squareup.capital.plan.service.PlanTerm.prototype.setObligationCalculationStartAt = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearObligationCalculationStartAt = function() {
  return this.setObligationCalculationStartAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasObligationCalculationStartAt = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int32 penalty_rate_bps = 19;
 * @return {number}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getPenaltyRateBps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.setPenaltyRateBps = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearPenaltyRateBps = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasPenaltyRateBps = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional squareup.common.Money penalty_amount = 20;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getPenaltyAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 20));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
*/
proto.squareup.capital.plan.service.PlanTerm.prototype.setPenaltyAmount = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearPenaltyAmount = function() {
  return this.setPenaltyAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasPenaltyAmount = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional int32 maturity_term_length = 21;
 * @return {number}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getMaturityTermLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.setMaturityTermLength = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearMaturityTermLength = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasMaturityTermLength = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional squareup.capital.common.MaturityTermUnit maturity_term_unit = 22;
 * @return {!proto.squareup.capital.common.MaturityTermUnit}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.getMaturityTermUnit = function() {
  return /** @type {!proto.squareup.capital.common.MaturityTermUnit} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {!proto.squareup.capital.common.MaturityTermUnit} value
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.setMaturityTermUnit = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.PlanTerm} returns this
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.clearMaturityTermUnit = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.PlanTerm.prototype.hasMaturityTermUnit = function() {
  return jspb.Message.getField(this, 22) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.RepaymentTerms.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.RepaymentTerms} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.RepaymentTerms.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethod: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    numberPaymentPeriods: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    paymentAmount: (f = msg.getPaymentAmount()) && currency_pb.Money.toObject(includeInstance, f),
    holdRateBps: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.RepaymentTerms}
 */
proto.squareup.capital.plan.service.RepaymentTerms.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.RepaymentTerms;
  return proto.squareup.capital.plan.service.RepaymentTerms.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.RepaymentTerms} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.RepaymentTerms}
 */
proto.squareup.capital.plan.service.RepaymentTerms.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.squareup.capital.plan.service.RepaymentTerms.PaymentMethod} */ (reader.readEnum());
      msg.setPaymentMethod(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberPaymentPeriods(value);
      break;
    case 3:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setPaymentAmount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHoldRateBps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.RepaymentTerms.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.RepaymentTerms} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.RepaymentTerms.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.squareup.capital.plan.service.RepaymentTerms.PaymentMethod} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPaymentAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.squareup.capital.plan.service.RepaymentTerms.PaymentMethod = {
  PM_DO_NOT_USE: 0,
  FIXED_AMOUNT: 1,
  PORTION_OF_SALES: 2,
  MIXED_METHOD: 3
};

/**
 * optional PaymentMethod payment_method = 1;
 * @return {!proto.squareup.capital.plan.service.RepaymentTerms.PaymentMethod}
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.getPaymentMethod = function() {
  return /** @type {!proto.squareup.capital.plan.service.RepaymentTerms.PaymentMethod} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.squareup.capital.plan.service.RepaymentTerms.PaymentMethod} value
 * @return {!proto.squareup.capital.plan.service.RepaymentTerms} returns this
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.setPaymentMethod = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.RepaymentTerms} returns this
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.clearPaymentMethod = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.hasPaymentMethod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 number_payment_periods = 2;
 * @return {number}
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.getNumberPaymentPeriods = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.RepaymentTerms} returns this
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.setNumberPaymentPeriods = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.RepaymentTerms} returns this
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.clearNumberPaymentPeriods = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.hasNumberPaymentPeriods = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional squareup.common.Money payment_amount = 3;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.getPaymentAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 3));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.RepaymentTerms} returns this
*/
proto.squareup.capital.plan.service.RepaymentTerms.prototype.setPaymentAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.RepaymentTerms} returns this
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.clearPaymentAmount = function() {
  return this.setPaymentAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.hasPaymentAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double hold_rate_bps = 4;
 * @return {number}
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.getHoldRateBps = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.RepaymentTerms} returns this
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.setHoldRateBps = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.RepaymentTerms} returns this
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.clearHoldRateBps = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.RepaymentTerms.prototype.hasHoldRateBps = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.CreatePlanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.CreatePlanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.CreatePlanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.CreatePlanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && models_pb.Plan.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.CreatePlanResponse}
 */
proto.squareup.capital.plan.service.CreatePlanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.CreatePlanResponse;
  return proto.squareup.capital.plan.service.CreatePlanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.CreatePlanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.CreatePlanResponse}
 */
proto.squareup.capital.plan.service.CreatePlanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.CreatePlanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.CreatePlanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.CreatePlanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.CreatePlanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.capital.plan.models.Plan plan = 1;
 * @return {?proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.CreatePlanResponse.prototype.getPlan = function() {
  return /** @type{?proto.squareup.capital.plan.models.Plan} */ (
    jspb.Message.getWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {?proto.squareup.capital.plan.models.Plan|undefined} value
 * @return {!proto.squareup.capital.plan.service.CreatePlanResponse} returns this
*/
proto.squareup.capital.plan.service.CreatePlanResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.CreatePlanResponse} returns this
 */
proto.squareup.capital.plan.service.CreatePlanResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.CreatePlanResponse.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.GetPlanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.GetPlanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.GetPlanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.GetPlanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    planToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.GetPlanRequest}
 */
proto.squareup.capital.plan.service.GetPlanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.GetPlanRequest;
  return proto.squareup.capital.plan.service.GetPlanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.GetPlanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.GetPlanRequest}
 */
proto.squareup.capital.plan.service.GetPlanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.GetPlanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.GetPlanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.GetPlanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.GetPlanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string plan_token = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.GetPlanRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.GetPlanRequest} returns this
 */
proto.squareup.capital.plan.service.GetPlanRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.GetPlanRequest} returns this
 */
proto.squareup.capital.plan.service.GetPlanRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.GetPlanRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.GetPlanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.GetPlanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.GetPlanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.GetPlanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && models_pb.Plan.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.GetPlanResponse}
 */
proto.squareup.capital.plan.service.GetPlanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.GetPlanResponse;
  return proto.squareup.capital.plan.service.GetPlanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.GetPlanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.GetPlanResponse}
 */
proto.squareup.capital.plan.service.GetPlanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.GetPlanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.GetPlanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.GetPlanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.GetPlanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.capital.plan.models.Plan plan = 1;
 * @return {?proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.GetPlanResponse.prototype.getPlan = function() {
  return /** @type{?proto.squareup.capital.plan.models.Plan} */ (
    jspb.Message.getWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {?proto.squareup.capital.plan.models.Plan|undefined} value
 * @return {!proto.squareup.capital.plan.service.GetPlanResponse} returns this
*/
proto.squareup.capital.plan.service.GetPlanResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.GetPlanResponse} returns this
 */
proto.squareup.capital.plan.service.GetPlanResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.GetPlanResponse.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ListPlanPerformancesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    asOf: (f = msg.getAsOf()) && time_pb.DateTime.toObject(includeInstance, f),
    fundPlanTokensList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    planTokensList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ListPlanPerformancesRequest;
  return proto.squareup.capital.plan.service.ListPlanPerformancesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new time_pb.DateTime;
      reader.readMessage(value,time_pb.DateTime.deserializeBinaryFromReader);
      msg.setAsOf(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFundPlanTokens(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPlanTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ListPlanPerformancesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsOf();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      time_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getFundPlanTokensList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getPlanTokensList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional squareup.common.time.DateTime as_of = 1;
 * @return {?proto.squareup.common.time.DateTime}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.getAsOf = function() {
  return /** @type{?proto.squareup.common.time.DateTime} */ (
    jspb.Message.getWrapperField(this, time_pb.DateTime, 1));
};


/**
 * @param {?proto.squareup.common.time.DateTime|undefined} value
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} returns this
*/
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.setAsOf = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.clearAsOf = function() {
  return this.setAsOf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.hasAsOf = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string fund_plan_tokens = 2;
 * @return {!Array<string>}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.getFundPlanTokensList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.setFundPlanTokensList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.addFundPlanTokens = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.clearFundPlanTokensList = function() {
  return this.setFundPlanTokensList([]);
};


/**
 * repeated string plan_tokens = 3;
 * @return {!Array<string>}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.getPlanTokensList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.setPlanTokensList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.addPlanTokens = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanPerformancesRequest.prototype.clearPlanTokensList = function() {
  return this.setPlanTokensList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.ListPlanPerformancesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ListPlanPerformancesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ListPlanPerformancesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlanPerformancesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    planPerformancesList: jspb.Message.toObjectList(msg.getPlanPerformancesList(),
    models_pb.PlanPerformance.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesResponse}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ListPlanPerformancesResponse;
  return proto.squareup.capital.plan.service.ListPlanPerformancesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ListPlanPerformancesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesResponse}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.PlanPerformance;
      reader.readMessage(value,models_pb.PlanPerformance.deserializeBinaryFromReader);
      msg.addPlanPerformances(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ListPlanPerformancesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ListPlanPerformancesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlanPerformancesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlanPerformancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      models_pb.PlanPerformance.serializeBinaryToWriter
    );
  }
};


/**
 * repeated squareup.capital.plan.models.PlanPerformance plan_performances = 1;
 * @return {!Array<!proto.squareup.capital.plan.models.PlanPerformance>}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesResponse.prototype.getPlanPerformancesList = function() {
  return /** @type{!Array<!proto.squareup.capital.plan.models.PlanPerformance>} */ (
    jspb.Message.getRepeatedWrapperField(this, models_pb.PlanPerformance, 1));
};


/**
 * @param {!Array<!proto.squareup.capital.plan.models.PlanPerformance>} value
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesResponse} returns this
*/
proto.squareup.capital.plan.service.ListPlanPerformancesResponse.prototype.setPlanPerformancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.squareup.capital.plan.models.PlanPerformance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.models.PlanPerformance}
 */
proto.squareup.capital.plan.service.ListPlanPerformancesResponse.prototype.addPlanPerformances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.squareup.capital.plan.models.PlanPerformance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.ListPlanPerformancesResponse} returns this
 */
proto.squareup.capital.plan.service.ListPlanPerformancesResponse.prototype.clearPlanPerformancesList = function() {
  return this.setPlanPerformancesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ListActivePlanTokensRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ListActivePlanTokensRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTime: (f = msg.getStartTime()) && time_pb.DateTime.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && time_pb.DateTime.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ListActivePlanTokensRequest}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ListActivePlanTokensRequest;
  return proto.squareup.capital.plan.service.ListActivePlanTokensRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ListActivePlanTokensRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ListActivePlanTokensRequest}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new time_pb.DateTime;
      reader.readMessage(value,time_pb.DateTime.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 2:
      var value = new time_pb.DateTime;
      reader.readMessage(value,time_pb.DateTime.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ListActivePlanTokensRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ListActivePlanTokensRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      time_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      time_pb.DateTime.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.common.time.DateTime start_time = 1;
 * @return {?proto.squareup.common.time.DateTime}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.prototype.getStartTime = function() {
  return /** @type{?proto.squareup.common.time.DateTime} */ (
    jspb.Message.getWrapperField(this, time_pb.DateTime, 1));
};


/**
 * @param {?proto.squareup.common.time.DateTime|undefined} value
 * @return {!proto.squareup.capital.plan.service.ListActivePlanTokensRequest} returns this
*/
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ListActivePlanTokensRequest} returns this
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional squareup.common.time.DateTime end_time = 2;
 * @return {?proto.squareup.common.time.DateTime}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.prototype.getEndTime = function() {
  return /** @type{?proto.squareup.common.time.DateTime} */ (
    jspb.Message.getWrapperField(this, time_pb.DateTime, 2));
};


/**
 * @param {?proto.squareup.common.time.DateTime|undefined} value
 * @return {!proto.squareup.capital.plan.service.ListActivePlanTokensRequest} returns this
*/
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ListActivePlanTokensRequest} returns this
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.ListActivePlanTokensResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ListActivePlanTokensResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ListActivePlanTokensResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListActivePlanTokensResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    planTokensList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ListActivePlanTokensResponse}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ListActivePlanTokensResponse;
  return proto.squareup.capital.plan.service.ListActivePlanTokensResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ListActivePlanTokensResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ListActivePlanTokensResponse}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPlanTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ListActivePlanTokensResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ListActivePlanTokensResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListActivePlanTokensResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlanTokensList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string plan_tokens = 1;
 * @return {!Array<string>}
 */
proto.squareup.capital.plan.service.ListActivePlanTokensResponse.prototype.getPlanTokensList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.squareup.capital.plan.service.ListActivePlanTokensResponse} returns this
 */
proto.squareup.capital.plan.service.ListActivePlanTokensResponse.prototype.setPlanTokensList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.service.ListActivePlanTokensResponse} returns this
 */
proto.squareup.capital.plan.service.ListActivePlanTokensResponse.prototype.addPlanTokens = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.ListActivePlanTokensResponse} returns this
 */
proto.squareup.capital.plan.service.ListActivePlanTokensResponse.prototype.clearPlanTokensList = function() {
  return this.setPlanTokensList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.ListPlansRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ListPlansRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ListPlansRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ListPlansRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlansRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    planTokensList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    asOf: (f = msg.getAsOf()) && time_pb.DateTime.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ListPlansRequest}
 */
proto.squareup.capital.plan.service.ListPlansRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ListPlansRequest;
  return proto.squareup.capital.plan.service.ListPlansRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ListPlansRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ListPlansRequest}
 */
proto.squareup.capital.plan.service.ListPlansRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPlanTokens(value);
      break;
    case 2:
      var value = new time_pb.DateTime;
      reader.readMessage(value,time_pb.DateTime.deserializeBinaryFromReader);
      msg.setAsOf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ListPlansRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ListPlansRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ListPlansRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlansRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlanTokensList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAsOf();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      time_pb.DateTime.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string plan_tokens = 1;
 * @return {!Array<string>}
 */
proto.squareup.capital.plan.service.ListPlansRequest.prototype.getPlanTokensList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.squareup.capital.plan.service.ListPlansRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlansRequest.prototype.setPlanTokensList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.service.ListPlansRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlansRequest.prototype.addPlanTokens = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.ListPlansRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlansRequest.prototype.clearPlanTokensList = function() {
  return this.setPlanTokensList([]);
};


/**
 * optional squareup.common.time.DateTime as_of = 2;
 * @return {?proto.squareup.common.time.DateTime}
 */
proto.squareup.capital.plan.service.ListPlansRequest.prototype.getAsOf = function() {
  return /** @type{?proto.squareup.common.time.DateTime} */ (
    jspb.Message.getWrapperField(this, time_pb.DateTime, 2));
};


/**
 * @param {?proto.squareup.common.time.DateTime|undefined} value
 * @return {!proto.squareup.capital.plan.service.ListPlansRequest} returns this
*/
proto.squareup.capital.plan.service.ListPlansRequest.prototype.setAsOf = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ListPlansRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlansRequest.prototype.clearAsOf = function() {
  return this.setAsOf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ListPlansRequest.prototype.hasAsOf = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.ListPlansResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ListPlansResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ListPlansResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ListPlansResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlansResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plansList: jspb.Message.toObjectList(msg.getPlansList(),
    models_pb.Plan.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ListPlansResponse}
 */
proto.squareup.capital.plan.service.ListPlansResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ListPlansResponse;
  return proto.squareup.capital.plan.service.ListPlansResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ListPlansResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ListPlansResponse}
 */
proto.squareup.capital.plan.service.ListPlansResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.addPlans(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ListPlansResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ListPlansResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ListPlansResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlansResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
};


/**
 * repeated squareup.capital.plan.models.Plan plans = 1;
 * @return {!Array<!proto.squareup.capital.plan.models.Plan>}
 */
proto.squareup.capital.plan.service.ListPlansResponse.prototype.getPlansList = function() {
  return /** @type{!Array<!proto.squareup.capital.plan.models.Plan>} */ (
    jspb.Message.getRepeatedWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {!Array<!proto.squareup.capital.plan.models.Plan>} value
 * @return {!proto.squareup.capital.plan.service.ListPlansResponse} returns this
*/
proto.squareup.capital.plan.service.ListPlansResponse.prototype.setPlansList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.squareup.capital.plan.models.Plan=} opt_value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.ListPlansResponse.prototype.addPlans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.squareup.capital.plan.models.Plan, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.ListPlansResponse} returns this
 */
proto.squareup.capital.plan.service.ListPlansResponse.prototype.clearPlansList = function() {
  return this.setPlansList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    planToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest;
  return proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    case 2:
      var value = new proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query;
      reader.readMessage(value,proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.deserializeBinaryFromReader);
      msg.addQueries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.toObject = function(includeInstance, msg) {
  var f, obj = {
    asOf: (f = msg.getAsOf()) && time_pb.DateTime.toObject(includeInstance, f),
    planDelinquencyType: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    applyPendingPaymentRule: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query;
  return proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new time_pb.DateTime;
      reader.readMessage(value,time_pb.DateTime.deserializeBinaryFromReader);
      msg.setAsOf(value);
      break;
    case 2:
      var value = /** @type {!proto.squareup.capital.plan.models.PlanDelinquency.Type} */ (reader.readEnum());
      msg.setPlanDelinquencyType(value);
      break;
    case 3:
      var value = /** @type {!proto.squareup.capital.plan.models.PlanDelinquency.PendingPaymentRule} */ (reader.readEnum());
      msg.setApplyPendingPaymentRule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsOf();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      time_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.squareup.capital.plan.models.PlanDelinquency.Type} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.squareup.capital.plan.models.PlanDelinquency.PendingPaymentRule} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional squareup.common.time.DateTime as_of = 1;
 * @return {?proto.squareup.common.time.DateTime}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.getAsOf = function() {
  return /** @type{?proto.squareup.common.time.DateTime} */ (
    jspb.Message.getWrapperField(this, time_pb.DateTime, 1));
};


/**
 * @param {?proto.squareup.common.time.DateTime|undefined} value
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query} returns this
*/
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.setAsOf = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query} returns this
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.clearAsOf = function() {
  return this.setAsOf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.hasAsOf = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional squareup.capital.plan.models.PlanDelinquency.Type plan_delinquency_type = 2;
 * @return {!proto.squareup.capital.plan.models.PlanDelinquency.Type}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.getPlanDelinquencyType = function() {
  return /** @type {!proto.squareup.capital.plan.models.PlanDelinquency.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.squareup.capital.plan.models.PlanDelinquency.Type} value
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query} returns this
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.setPlanDelinquencyType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query} returns this
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.clearPlanDelinquencyType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.hasPlanDelinquencyType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional squareup.capital.plan.models.PlanDelinquency.PendingPaymentRule apply_pending_payment_rule = 3;
 * @return {!proto.squareup.capital.plan.models.PlanDelinquency.PendingPaymentRule}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.getApplyPendingPaymentRule = function() {
  return /** @type {!proto.squareup.capital.plan.models.PlanDelinquency.PendingPaymentRule} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.squareup.capital.plan.models.PlanDelinquency.PendingPaymentRule} value
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query} returns this
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.setApplyPendingPaymentRule = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query} returns this
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.clearApplyPendingPaymentRule = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query.prototype.hasApplyPendingPaymentRule = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string plan_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest} returns this
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest} returns this
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Query queries = 2;
 * @return {!Array<!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query>}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query, 2));
};


/**
 * @param {!Array<!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query>} value
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest} returns this
*/
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query=} opt_value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.Query, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest} returns this
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    planDelinquenciesList: jspb.Message.toObjectList(msg.getPlanDelinquenciesList(),
    models_pb.PlanDelinquency.toObject, includeInstance),
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    error_pb.Error.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse;
  return proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.PlanDelinquency;
      reader.readMessage(value,models_pb.PlanDelinquency.deserializeBinaryFromReader);
      msg.addPlanDelinquencies(value);
      break;
    case 2:
      var value = new error_pb.Error;
      reader.readMessage(value,error_pb.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlanDelinquenciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      models_pb.PlanDelinquency.serializeBinaryToWriter
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * repeated squareup.capital.plan.models.PlanDelinquency plan_delinquencies = 1;
 * @return {!Array<!proto.squareup.capital.plan.models.PlanDelinquency>}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.prototype.getPlanDelinquenciesList = function() {
  return /** @type{!Array<!proto.squareup.capital.plan.models.PlanDelinquency>} */ (
    jspb.Message.getRepeatedWrapperField(this, models_pb.PlanDelinquency, 1));
};


/**
 * @param {!Array<!proto.squareup.capital.plan.models.PlanDelinquency>} value
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse} returns this
*/
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.prototype.setPlanDelinquenciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.squareup.capital.plan.models.PlanDelinquency=} opt_value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.models.PlanDelinquency}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.prototype.addPlanDelinquencies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.squareup.capital.plan.models.PlanDelinquency, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse} returns this
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.prototype.clearPlanDelinquenciesList = function() {
  return this.setPlanDelinquenciesList([]);
};


/**
 * repeated squareup.connect.v2.resources.Error errors = 2;
 * @return {!Array<!proto.squareup.connect.v2.resources.Error>}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.squareup.connect.v2.resources.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, error_pb.Error, 2));
};


/**
 * @param {!Array<!proto.squareup.connect.v2.resources.Error>} value
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse} returns this
*/
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.squareup.connect.v2.resources.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.squareup.connect.v2.resources.Error}
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.squareup.connect.v2.resources.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse} returns this
 */
proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ListPlansByCustomerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ListPlansByCustomerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ListPlansByCustomerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlansByCustomerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ListPlansByCustomerRequest}
 */
proto.squareup.capital.plan.service.ListPlansByCustomerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ListPlansByCustomerRequest;
  return proto.squareup.capital.plan.service.ListPlansByCustomerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ListPlansByCustomerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ListPlansByCustomerRequest}
 */
proto.squareup.capital.plan.service.ListPlansByCustomerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ListPlansByCustomerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ListPlansByCustomerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ListPlansByCustomerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlansByCustomerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string customer_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.ListPlansByCustomerRequest.prototype.getCustomerToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.ListPlansByCustomerRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlansByCustomerRequest.prototype.setCustomerToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ListPlansByCustomerRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlansByCustomerRequest.prototype.clearCustomerToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ListPlansByCustomerRequest.prototype.hasCustomerToken = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.ListPlansByCustomerResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ListPlansByCustomerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ListPlansByCustomerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ListPlansByCustomerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlansByCustomerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plansList: jspb.Message.toObjectList(msg.getPlansList(),
    models_pb.Plan.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ListPlansByCustomerResponse}
 */
proto.squareup.capital.plan.service.ListPlansByCustomerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ListPlansByCustomerResponse;
  return proto.squareup.capital.plan.service.ListPlansByCustomerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ListPlansByCustomerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ListPlansByCustomerResponse}
 */
proto.squareup.capital.plan.service.ListPlansByCustomerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.addPlans(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ListPlansByCustomerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ListPlansByCustomerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ListPlansByCustomerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlansByCustomerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
};


/**
 * repeated squareup.capital.plan.models.Plan plans = 1;
 * @return {!Array<!proto.squareup.capital.plan.models.Plan>}
 */
proto.squareup.capital.plan.service.ListPlansByCustomerResponse.prototype.getPlansList = function() {
  return /** @type{!Array<!proto.squareup.capital.plan.models.Plan>} */ (
    jspb.Message.getRepeatedWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {!Array<!proto.squareup.capital.plan.models.Plan>} value
 * @return {!proto.squareup.capital.plan.service.ListPlansByCustomerResponse} returns this
*/
proto.squareup.capital.plan.service.ListPlansByCustomerResponse.prototype.setPlansList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.squareup.capital.plan.models.Plan=} opt_value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.ListPlansByCustomerResponse.prototype.addPlans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.squareup.capital.plan.models.Plan, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.ListPlansByCustomerResponse} returns this
 */
proto.squareup.capital.plan.service.ListPlansByCustomerResponse.prototype.clearPlansList = function() {
  return this.setPlansList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.GetTxnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.GetTxnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.GetTxnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.GetTxnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    txnToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.GetTxnRequest}
 */
proto.squareup.capital.plan.service.GetTxnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.GetTxnRequest;
  return proto.squareup.capital.plan.service.GetTxnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.GetTxnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.GetTxnRequest}
 */
proto.squareup.capital.plan.service.GetTxnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxnToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.GetTxnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.GetTxnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.GetTxnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.GetTxnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string txn_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.GetTxnRequest.prototype.getTxnToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.GetTxnRequest} returns this
 */
proto.squareup.capital.plan.service.GetTxnRequest.prototype.setTxnToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.GetTxnRequest} returns this
 */
proto.squareup.capital.plan.service.GetTxnRequest.prototype.clearTxnToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.GetTxnRequest.prototype.hasTxnToken = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.GetTxnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.GetTxnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.GetTxnResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.GetTxnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txn: (f = msg.getTxn()) && models_pb.Txn.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.GetTxnResponse}
 */
proto.squareup.capital.plan.service.GetTxnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.GetTxnResponse;
  return proto.squareup.capital.plan.service.GetTxnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.GetTxnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.GetTxnResponse}
 */
proto.squareup.capital.plan.service.GetTxnResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Txn;
      reader.readMessage(value,models_pb.Txn.deserializeBinaryFromReader);
      msg.setTxn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.GetTxnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.GetTxnResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.GetTxnResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.GetTxnResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      models_pb.Txn.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.capital.plan.models.Txn txn = 1;
 * @return {?proto.squareup.capital.plan.models.Txn}
 */
proto.squareup.capital.plan.service.GetTxnResponse.prototype.getTxn = function() {
  return /** @type{?proto.squareup.capital.plan.models.Txn} */ (
    jspb.Message.getWrapperField(this, models_pb.Txn, 1));
};


/**
 * @param {?proto.squareup.capital.plan.models.Txn|undefined} value
 * @return {!proto.squareup.capital.plan.service.GetTxnResponse} returns this
*/
proto.squareup.capital.plan.service.GetTxnResponse.prototype.setTxn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.GetTxnResponse} returns this
 */
proto.squareup.capital.plan.service.GetTxnResponse.prototype.clearTxn = function() {
  return this.setTxn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.GetTxnResponse.prototype.hasTxn = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ListPlanTxnsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ListPlanTxnsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    planToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    pagination: (f = msg.getPagination()) && common_pb.Pagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ListPlanTxnsRequest}
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ListPlanTxnsRequest;
  return proto.squareup.capital.plan.service.ListPlanTxnsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ListPlanTxnsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ListPlanTxnsRequest}
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    case 3:
      var value = new common_pb.Pagination;
      reader.readMessage(value,common_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ListPlanTxnsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ListPlanTxnsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string plan_token = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.ListPlanTxnsRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ListPlanTxnsRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional squareup.capital.common.Pagination pagination = 3;
 * @return {?proto.squareup.capital.common.Pagination}
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.prototype.getPagination = function() {
  return /** @type{?proto.squareup.capital.common.Pagination} */ (
    jspb.Message.getWrapperField(this, common_pb.Pagination, 3));
};


/**
 * @param {?proto.squareup.capital.common.Pagination|undefined} value
 * @return {!proto.squareup.capital.plan.service.ListPlanTxnsRequest} returns this
*/
proto.squareup.capital.plan.service.ListPlanTxnsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ListPlanTxnsRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ListPlanTxnsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ListPlanTxnsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ListPlanTxnsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txnList: jspb.Message.toObjectList(msg.getTxnList(),
    models_pb.Txn.toObject, includeInstance),
    cursor: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ListPlanTxnsResponse}
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ListPlanTxnsResponse;
  return proto.squareup.capital.plan.service.ListPlanTxnsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ListPlanTxnsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ListPlanTxnsResponse}
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Txn;
      reader.readMessage(value,models_pb.Txn.deserializeBinaryFromReader);
      msg.addTxn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ListPlanTxnsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ListPlanTxnsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxnList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      models_pb.Txn.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated squareup.capital.plan.models.Txn txn = 1;
 * @return {!Array<!proto.squareup.capital.plan.models.Txn>}
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.prototype.getTxnList = function() {
  return /** @type{!Array<!proto.squareup.capital.plan.models.Txn>} */ (
    jspb.Message.getRepeatedWrapperField(this, models_pb.Txn, 1));
};


/**
 * @param {!Array<!proto.squareup.capital.plan.models.Txn>} value
 * @return {!proto.squareup.capital.plan.service.ListPlanTxnsResponse} returns this
*/
proto.squareup.capital.plan.service.ListPlanTxnsResponse.prototype.setTxnList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.squareup.capital.plan.models.Txn=} opt_value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.models.Txn}
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.prototype.addTxn = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.squareup.capital.plan.models.Txn, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.ListPlanTxnsResponse} returns this
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.prototype.clearTxnList = function() {
  return this.setTxnList([]);
};


/**
 * optional string cursor = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.ListPlanTxnsResponse} returns this
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.prototype.setCursor = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ListPlanTxnsResponse} returns this
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.prototype.clearCursor = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ListPlanTxnsResponse.prototype.hasCursor = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.MakePlanPaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idempotenceToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    planToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    paymentAmount: (f = msg.getPaymentAmount()) && currency_pb.Money.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentRequest}
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.MakePlanPaymentRequest;
  return proto.squareup.capital.plan.service.MakePlanPaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentRequest}
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotenceToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    case 3:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setPaymentAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.MakePlanPaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPaymentAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
};


/**
 * optional string idempotence_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.getIdempotenceToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.setIdempotenceToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.clearIdempotenceToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.hasIdempotenceToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string plan_token = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional squareup.common.Money payment_amount = 3;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.getPaymentAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 3));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentRequest} returns this
*/
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.setPaymentAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.clearPaymentAmount = function() {
  return this.setPaymentAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanPaymentRequest.prototype.hasPaymentAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idempotenceToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    planToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    paymentAmount: (f = msg.getPaymentAmount()) && currency_pb.Money.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest}
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest;
  return proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest}
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotenceToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    case 3:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setPaymentAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPaymentAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
};


/**
 * optional string idempotence_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.getIdempotenceToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.setIdempotenceToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.clearIdempotenceToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.hasIdempotenceToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string plan_token = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional squareup.common.Money payment_amount = 3;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.getPaymentAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 3));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest} returns this
*/
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.setPaymentAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.clearPaymentAmount = function() {
  return this.setPaymentAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest.prototype.hasPaymentAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.MakePlanPaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && models_pb.Plan.toObject(includeInstance, f),
    txn: (f = msg.getTxn()) && models_pb.Txn.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentResponse}
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.MakePlanPaymentResponse;
  return proto.squareup.capital.plan.service.MakePlanPaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentResponse}
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    case 2:
      var value = new models_pb.Txn;
      reader.readMessage(value,models_pb.Txn.deserializeBinaryFromReader);
      msg.setTxn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.MakePlanPaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
  f = message.getTxn();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      models_pb.Txn.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.capital.plan.models.Plan plan = 1;
 * @return {?proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse.prototype.getPlan = function() {
  return /** @type{?proto.squareup.capital.plan.models.Plan} */ (
    jspb.Message.getWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {?proto.squareup.capital.plan.models.Plan|undefined} value
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentResponse} returns this
*/
proto.squareup.capital.plan.service.MakePlanPaymentResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentResponse} returns this
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional squareup.capital.plan.models.Txn txn = 2;
 * @return {?proto.squareup.capital.plan.models.Txn}
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse.prototype.getTxn = function() {
  return /** @type{?proto.squareup.capital.plan.models.Txn} */ (
    jspb.Message.getWrapperField(this, models_pb.Txn, 2));
};


/**
 * @param {?proto.squareup.capital.plan.models.Txn|undefined} value
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentResponse} returns this
*/
proto.squareup.capital.plan.service.MakePlanPaymentResponse.prototype.setTxn = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanPaymentResponse} returns this
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse.prototype.clearTxn = function() {
  return this.setTxn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanPaymentResponse.prototype.hasTxn = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.MakePlanRefundRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.MakePlanRefundRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idempotenceToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    planToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    refundAmount: (f = msg.getRefundAmount()) && currency_pb.Money.toObject(includeInstance, f),
    newPaymentAmount: (f = msg.getNewPaymentAmount()) && currency_pb.Money.toObject(includeInstance, f),
    amortizationScheduleFinalPaymentAmount: (f = msg.getAmortizationScheduleFinalPaymentAmount()) && currency_pb.Money.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundRequest}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.MakePlanRefundRequest;
  return proto.squareup.capital.plan.service.MakePlanRefundRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.MakePlanRefundRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundRequest}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotenceToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    case 3:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setRefundAmount(value);
      break;
    case 4:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setNewPaymentAmount(value);
      break;
    case 5:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setAmortizationScheduleFinalPaymentAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.MakePlanRefundRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.MakePlanRefundRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRefundAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getNewPaymentAmount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getAmortizationScheduleFinalPaymentAmount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
};


/**
 * optional string idempotence_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.getIdempotenceToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.setIdempotenceToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.clearIdempotenceToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.hasIdempotenceToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string plan_token = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional squareup.common.Money refund_amount = 3;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.getRefundAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 3));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundRequest} returns this
*/
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.setRefundAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.clearRefundAmount = function() {
  return this.setRefundAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.hasRefundAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional squareup.common.Money new_payment_amount = 4;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.getNewPaymentAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 4));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundRequest} returns this
*/
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.setNewPaymentAmount = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.clearNewPaymentAmount = function() {
  return this.setNewPaymentAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.hasNewPaymentAmount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional squareup.common.Money amortization_schedule_final_payment_amount = 5;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.getAmortizationScheduleFinalPaymentAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 5));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundRequest} returns this
*/
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.setAmortizationScheduleFinalPaymentAmount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundRequest} returns this
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.clearAmortizationScheduleFinalPaymentAmount = function() {
  return this.setAmortizationScheduleFinalPaymentAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanRefundRequest.prototype.hasAmortizationScheduleFinalPaymentAmount = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.MakePlanRefundResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.MakePlanRefundResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && models_pb.Plan.toObject(includeInstance, f),
    txn: (f = msg.getTxn()) && models_pb.Txn.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundResponse}
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.MakePlanRefundResponse;
  return proto.squareup.capital.plan.service.MakePlanRefundResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.MakePlanRefundResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundResponse}
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    case 2:
      var value = new models_pb.Txn;
      reader.readMessage(value,models_pb.Txn.deserializeBinaryFromReader);
      msg.setTxn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.MakePlanRefundResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.MakePlanRefundResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
  f = message.getTxn();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      models_pb.Txn.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.capital.plan.models.Plan plan = 1;
 * @return {?proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse.prototype.getPlan = function() {
  return /** @type{?proto.squareup.capital.plan.models.Plan} */ (
    jspb.Message.getWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {?proto.squareup.capital.plan.models.Plan|undefined} value
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundResponse} returns this
*/
proto.squareup.capital.plan.service.MakePlanRefundResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundResponse} returns this
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional squareup.capital.plan.models.Txn txn = 2;
 * @return {?proto.squareup.capital.plan.models.Txn}
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse.prototype.getTxn = function() {
  return /** @type{?proto.squareup.capital.plan.models.Txn} */ (
    jspb.Message.getWrapperField(this, models_pb.Txn, 2));
};


/**
 * @param {?proto.squareup.capital.plan.models.Txn|undefined} value
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundResponse} returns this
*/
proto.squareup.capital.plan.service.MakePlanRefundResponse.prototype.setTxn = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.MakePlanRefundResponse} returns this
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse.prototype.clearTxn = function() {
  return this.setTxn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.MakePlanRefundResponse.prototype.hasTxn = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.OriginatePlanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.OriginatePlanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idempotenceToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    planToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    originator: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.OriginatePlanRequest}
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.OriginatePlanRequest;
  return proto.squareup.capital.plan.service.OriginatePlanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.OriginatePlanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.OriginatePlanRequest}
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotenceToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    case 3:
      var value = /** @type {!proto.squareup.capital.plan.service.OriginatePlanRequest.Originator} */ (reader.readEnum());
      msg.setOriginator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.OriginatePlanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.OriginatePlanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!proto.squareup.capital.plan.service.OriginatePlanRequest.Originator} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.Originator = {
  O_DO_NOT_USE: 0,
  CELTIC: 1,
  SQUARE: 2
};

/**
 * optional string idempotence_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.getIdempotenceToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.OriginatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.setIdempotenceToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.OriginatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.clearIdempotenceToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.hasIdempotenceToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string plan_token = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.OriginatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.OriginatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Originator originator = 3;
 * @return {!proto.squareup.capital.plan.service.OriginatePlanRequest.Originator}
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.getOriginator = function() {
  return /** @type {!proto.squareup.capital.plan.service.OriginatePlanRequest.Originator} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.squareup.capital.plan.service.OriginatePlanRequest.Originator} value
 * @return {!proto.squareup.capital.plan.service.OriginatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.setOriginator = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.OriginatePlanRequest} returns this
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.clearOriginator = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.OriginatePlanRequest.prototype.hasOriginator = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.OriginatePlanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.OriginatePlanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.OriginatePlanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.OriginatePlanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && models_pb.Plan.toObject(includeInstance, f),
    txn: (f = msg.getTxn()) && models_pb.Txn.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.OriginatePlanResponse}
 */
proto.squareup.capital.plan.service.OriginatePlanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.OriginatePlanResponse;
  return proto.squareup.capital.plan.service.OriginatePlanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.OriginatePlanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.OriginatePlanResponse}
 */
proto.squareup.capital.plan.service.OriginatePlanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    case 2:
      var value = new models_pb.Txn;
      reader.readMessage(value,models_pb.Txn.deserializeBinaryFromReader);
      msg.setTxn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.OriginatePlanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.OriginatePlanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.OriginatePlanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.OriginatePlanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
  f = message.getTxn();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      models_pb.Txn.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.capital.plan.models.Plan plan = 1;
 * @return {?proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.OriginatePlanResponse.prototype.getPlan = function() {
  return /** @type{?proto.squareup.capital.plan.models.Plan} */ (
    jspb.Message.getWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {?proto.squareup.capital.plan.models.Plan|undefined} value
 * @return {!proto.squareup.capital.plan.service.OriginatePlanResponse} returns this
*/
proto.squareup.capital.plan.service.OriginatePlanResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.OriginatePlanResponse} returns this
 */
proto.squareup.capital.plan.service.OriginatePlanResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.OriginatePlanResponse.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional squareup.capital.plan.models.Txn txn = 2;
 * @return {?proto.squareup.capital.plan.models.Txn}
 */
proto.squareup.capital.plan.service.OriginatePlanResponse.prototype.getTxn = function() {
  return /** @type{?proto.squareup.capital.plan.models.Txn} */ (
    jspb.Message.getWrapperField(this, models_pb.Txn, 2));
};


/**
 * @param {?proto.squareup.capital.plan.models.Txn|undefined} value
 * @return {!proto.squareup.capital.plan.service.OriginatePlanResponse} returns this
*/
proto.squareup.capital.plan.service.OriginatePlanResponse.prototype.setTxn = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.OriginatePlanResponse} returns this
 */
proto.squareup.capital.plan.service.OriginatePlanResponse.prototype.clearTxn = function() {
  return this.setTxn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.OriginatePlanResponse.prototype.hasTxn = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.SearchPlansRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.SearchPlansRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.SearchPlansRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cursor: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    limit: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    query: (f = msg.getQuery()) && models_pb.PlanQuery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.SearchPlansRequest}
 */
proto.squareup.capital.plan.service.SearchPlansRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.SearchPlansRequest;
  return proto.squareup.capital.plan.service.SearchPlansRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.SearchPlansRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.SearchPlansRequest}
 */
proto.squareup.capital.plan.service.SearchPlansRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 3:
      var value = new models_pb.PlanQuery;
      reader.readMessage(value,models_pb.PlanQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.SearchPlansRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.SearchPlansRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.SearchPlansRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      models_pb.PlanQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cursor = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.SearchPlansRequest} returns this
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.setCursor = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.SearchPlansRequest} returns this
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.clearCursor = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.hasCursor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 limit = 2;
 * @return {number}
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.SearchPlansRequest} returns this
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.SearchPlansRequest} returns this
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional squareup.capital.plan.models.PlanQuery query = 3;
 * @return {?proto.squareup.capital.plan.models.PlanQuery}
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.getQuery = function() {
  return /** @type{?proto.squareup.capital.plan.models.PlanQuery} */ (
    jspb.Message.getWrapperField(this, models_pb.PlanQuery, 3));
};


/**
 * @param {?proto.squareup.capital.plan.models.PlanQuery|undefined} value
 * @return {!proto.squareup.capital.plan.service.SearchPlansRequest} returns this
*/
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.SearchPlansRequest} returns this
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.SearchPlansRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.SearchPlansResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.SearchPlansResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.SearchPlansResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.SearchPlansResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    error_pb.Error.toObject, includeInstance),
    plansList: jspb.Message.toObjectList(msg.getPlansList(),
    models_pb.Plan.toObject, includeInstance),
    cursor: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.SearchPlansResponse}
 */
proto.squareup.capital.plan.service.SearchPlansResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.SearchPlansResponse;
  return proto.squareup.capital.plan.service.SearchPlansResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.SearchPlansResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.SearchPlansResponse}
 */
proto.squareup.capital.plan.service.SearchPlansResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new error_pb.Error;
      reader.readMessage(value,error_pb.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    case 2:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.addPlans(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.SearchPlansResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.SearchPlansResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.SearchPlansResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      error_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getPlansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated squareup.connect.v2.resources.Error errors = 1;
 * @return {!Array<!proto.squareup.connect.v2.resources.Error>}
 */
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.squareup.connect.v2.resources.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, error_pb.Error, 1));
};


/**
 * @param {!Array<!proto.squareup.connect.v2.resources.Error>} value
 * @return {!proto.squareup.capital.plan.service.SearchPlansResponse} returns this
*/
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.squareup.connect.v2.resources.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.squareup.connect.v2.resources.Error}
 */
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.squareup.connect.v2.resources.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.SearchPlansResponse} returns this
 */
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};


/**
 * repeated squareup.capital.plan.models.Plan plans = 2;
 * @return {!Array<!proto.squareup.capital.plan.models.Plan>}
 */
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.getPlansList = function() {
  return /** @type{!Array<!proto.squareup.capital.plan.models.Plan>} */ (
    jspb.Message.getRepeatedWrapperField(this, models_pb.Plan, 2));
};


/**
 * @param {!Array<!proto.squareup.capital.plan.models.Plan>} value
 * @return {!proto.squareup.capital.plan.service.SearchPlansResponse} returns this
*/
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.setPlansList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.squareup.capital.plan.models.Plan=} opt_value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.addPlans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.squareup.capital.plan.models.Plan, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.SearchPlansResponse} returns this
 */
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.clearPlansList = function() {
  return this.setPlansList([]);
};


/**
 * optional string cursor = 3;
 * @return {string}
 */
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.SearchPlansResponse} returns this
 */
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.setCursor = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.SearchPlansResponse} returns this
 */
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.clearCursor = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.SearchPlansResponse.prototype.hasCursor = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.FailPlanPaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idempotenceToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    planToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    txnToken: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    failedAt: (f = msg.getFailedAt()) && time_pb.DateTime.toObject(includeInstance, f),
    extraInfo: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    settlementInstructionToken: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.FailPlanPaymentRequest;
  return proto.squareup.capital.plan.service.FailPlanPaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotenceToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxnToken(value);
      break;
    case 4:
      var value = new time_pb.DateTime;
      reader.readMessage(value,time_pb.DateTime.deserializeBinaryFromReader);
      msg.setFailedAt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtraInfo(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSettlementInstructionToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.FailPlanPaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFailedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      time_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string idempotence_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.getIdempotenceToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.setIdempotenceToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.clearIdempotenceToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.hasIdempotenceToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string plan_token = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string txn_token = 3;
 * @return {string}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.getTxnToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.setTxnToken = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.clearTxnToken = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.hasTxnToken = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional squareup.common.time.DateTime failed_at = 4;
 * @return {?proto.squareup.common.time.DateTime}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.getFailedAt = function() {
  return /** @type{?proto.squareup.common.time.DateTime} */ (
    jspb.Message.getWrapperField(this, time_pb.DateTime, 4));
};


/**
 * @param {?proto.squareup.common.time.DateTime|undefined} value
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} returns this
*/
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.setFailedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.clearFailedAt = function() {
  return this.setFailedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.hasFailedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string extra_info = 5;
 * @return {string}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.getExtraInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.setExtraInfo = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.clearExtraInfo = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.hasExtraInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string settlement_instruction_token = 6;
 * @return {string}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.getSettlementInstructionToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.setSettlementInstructionToken = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.clearSettlementInstructionToken = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.FailPlanPaymentRequest.prototype.hasSettlementInstructionToken = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.FailPlanPaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.FailPlanPaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && models_pb.Plan.toObject(includeInstance, f),
    txn: (f = msg.getTxn()) && models_pb.Txn.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentResponse}
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.FailPlanPaymentResponse;
  return proto.squareup.capital.plan.service.FailPlanPaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.FailPlanPaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentResponse}
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    case 2:
      var value = new models_pb.Txn;
      reader.readMessage(value,models_pb.Txn.deserializeBinaryFromReader);
      msg.setTxn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.FailPlanPaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.FailPlanPaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
  f = message.getTxn();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      models_pb.Txn.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.capital.plan.models.Plan plan = 1;
 * @return {?proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse.prototype.getPlan = function() {
  return /** @type{?proto.squareup.capital.plan.models.Plan} */ (
    jspb.Message.getWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {?proto.squareup.capital.plan.models.Plan|undefined} value
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentResponse} returns this
*/
proto.squareup.capital.plan.service.FailPlanPaymentResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentResponse} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional squareup.capital.plan.models.Txn txn = 2;
 * @return {?proto.squareup.capital.plan.models.Txn}
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse.prototype.getTxn = function() {
  return /** @type{?proto.squareup.capital.plan.models.Txn} */ (
    jspb.Message.getWrapperField(this, models_pb.Txn, 2));
};


/**
 * @param {?proto.squareup.capital.plan.models.Txn|undefined} value
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentResponse} returns this
*/
proto.squareup.capital.plan.service.FailPlanPaymentResponse.prototype.setTxn = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.FailPlanPaymentResponse} returns this
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse.prototype.clearTxn = function() {
  return this.setTxn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.FailPlanPaymentResponse.prototype.hasTxn = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.RemovePlanPayerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    planId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    customerId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    actorId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    withRefund: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    refundAmount: (f = msg.getRefundAmount()) && currency_pb.Money.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.RemovePlanPayerRequest;
  return proto.squareup.capital.plan.service.RemovePlanPayerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setActorId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithRefund(value);
      break;
    case 6:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setRefundAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.RemovePlanPayerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getRefundAmount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
};


/**
 * optional string plan_id = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.getPlanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.setPlanId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.clearPlanId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.hasPlanId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string actor_id = 3;
 * @return {string}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.getActorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.setActorId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.clearActorId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.hasActorId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool with_refund = 5;
 * @return {boolean}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.getWithRefund = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.setWithRefund = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.clearWithRefund = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.hasWithRefund = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional squareup.common.Money refund_amount = 6;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.getRefundAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 6));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} returns this
*/
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.setRefundAmount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} returns this
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.clearRefundAmount = function() {
  return this.setRefundAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.RemovePlanPayerRequest.prototype.hasRefundAmount = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ReversePlanPaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idempotenceToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    planToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    reversalAmount: (f = msg.getReversalAmount()) && currency_pb.Money.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ReversePlanPaymentRequest;
  return proto.squareup.capital.plan.service.ReversePlanPaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotenceToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    case 3:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setReversalAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ReversePlanPaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReversalAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
};


/**
 * optional string idempotence_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.getIdempotenceToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.setIdempotenceToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.clearIdempotenceToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.hasIdempotenceToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string plan_token = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional squareup.common.Money reversal_amount = 3;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.getReversalAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 3));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest} returns this
*/
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.setReversalAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest} returns this
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.clearReversalAmount = function() {
  return this.setReversalAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentRequest.prototype.hasReversalAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ReversePlanPaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ReversePlanPaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && models_pb.Plan.toObject(includeInstance, f),
    txn: (f = msg.getTxn()) && models_pb.Txn.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentResponse}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ReversePlanPaymentResponse;
  return proto.squareup.capital.plan.service.ReversePlanPaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ReversePlanPaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentResponse}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.Plan;
      reader.readMessage(value,models_pb.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    case 2:
      var value = new models_pb.Txn;
      reader.readMessage(value,models_pb.Txn.deserializeBinaryFromReader);
      msg.setTxn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ReversePlanPaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ReversePlanPaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      models_pb.Plan.serializeBinaryToWriter
    );
  }
  f = message.getTxn();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      models_pb.Txn.serializeBinaryToWriter
    );
  }
};


/**
 * optional squareup.capital.plan.models.Plan plan = 1;
 * @return {?proto.squareup.capital.plan.models.Plan}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.prototype.getPlan = function() {
  return /** @type{?proto.squareup.capital.plan.models.Plan} */ (
    jspb.Message.getWrapperField(this, models_pb.Plan, 1));
};


/**
 * @param {?proto.squareup.capital.plan.models.Plan|undefined} value
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentResponse} returns this
*/
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentResponse} returns this
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional squareup.capital.plan.models.Txn txn = 2;
 * @return {?proto.squareup.capital.plan.models.Txn}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.prototype.getTxn = function() {
  return /** @type{?proto.squareup.capital.plan.models.Txn} */ (
    jspb.Message.getWrapperField(this, models_pb.Txn, 2));
};


/**
 * @param {?proto.squareup.capital.plan.models.Txn|undefined} value
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentResponse} returns this
*/
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.prototype.setTxn = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ReversePlanPaymentResponse} returns this
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.prototype.clearTxn = function() {
  return this.setTxn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ReversePlanPaymentResponse.prototype.hasTxn = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    planTokensList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest}
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest;
  return proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest}
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPlanTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlanTokensList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string plan_tokens = 1;
 * @return {!Array<string>}
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.prototype.getPlanTokensList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.prototype.setPlanTokensList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.prototype.addPlanTokens = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest} returns this
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest.prototype.clearPlanTokensList = function() {
  return this.setPlanTokensList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pastDueSnapshotsList: jspb.Message.toObjectList(msg.getPastDueSnapshotsList(),
    models_pb.PlanPastDueSnapshot.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse}
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse;
  return proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse}
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new models_pb.PlanPastDueSnapshot;
      reader.readMessage(value,models_pb.PlanPastDueSnapshot.deserializeBinaryFromReader);
      msg.addPastDueSnapshots(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPastDueSnapshotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      models_pb.PlanPastDueSnapshot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated squareup.capital.plan.models.PlanPastDueSnapshot past_due_snapshots = 1;
 * @return {!Array<!proto.squareup.capital.plan.models.PlanPastDueSnapshot>}
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.prototype.getPastDueSnapshotsList = function() {
  return /** @type{!Array<!proto.squareup.capital.plan.models.PlanPastDueSnapshot>} */ (
    jspb.Message.getRepeatedWrapperField(this, models_pb.PlanPastDueSnapshot, 1));
};


/**
 * @param {!Array<!proto.squareup.capital.plan.models.PlanPastDueSnapshot>} value
 * @return {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse} returns this
*/
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.prototype.setPastDueSnapshotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.squareup.capital.plan.models.PlanPastDueSnapshot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.models.PlanPastDueSnapshot}
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.prototype.addPastDueSnapshots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.squareup.capital.plan.models.PlanPastDueSnapshot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse} returns this
 */
proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.prototype.clearPastDueSnapshotsList = function() {
  return this.setPastDueSnapshotsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.AddPlanTagsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.AddPlanTagsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    planId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    tagsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.AddPlanTagsRequest}
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.AddPlanTagsRequest;
  return proto.squareup.capital.plan.service.AddPlanTagsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.AddPlanTagsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.AddPlanTagsRequest}
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.AddPlanTagsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.AddPlanTagsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string plan_id = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.prototype.getPlanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.AddPlanTagsRequest} returns this
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.prototype.setPlanId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.AddPlanTagsRequest} returns this
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.prototype.clearPlanId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.prototype.hasPlanId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string tags = 2;
 * @return {!Array<string>}
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.squareup.capital.plan.service.AddPlanTagsRequest} returns this
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.squareup.capital.plan.service.AddPlanTagsRequest} returns this
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.capital.plan.service.AddPlanTagsRequest} returns this
 */
proto.squareup.capital.plan.service.AddPlanTagsRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.ApplyServiceCreditRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    planId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    actorUid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    creditMoney: (f = msg.getCreditMoney()) && currency_pb.Money.toObject(includeInstance, f),
    reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    idempotenceToken: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.ApplyServiceCreditRequest;
  return proto.squareup.capital.plan.service.ApplyServiceCreditRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActorUid(value);
      break;
    case 3:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setCreditMoney(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotenceToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.ApplyServiceCreditRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCreditMoney();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string plan_id = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.getPlanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} returns this
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.setPlanId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} returns this
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.clearPlanId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.hasPlanId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 actor_uid = 2;
 * @return {number}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.getActorUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} returns this
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.setActorUid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} returns this
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.clearActorUid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.hasActorUid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional squareup.common.Money credit_money = 3;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.getCreditMoney = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 3));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} returns this
*/
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.setCreditMoney = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} returns this
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.clearCreditMoney = function() {
  return this.setCreditMoney(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.hasCreditMoney = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} returns this
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} returns this
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string idempotence_token = 5;
 * @return {string}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.getIdempotenceToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} returns this
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.setIdempotenceToken = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} returns this
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.clearIdempotenceToken = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.ApplyServiceCreditRequest.prototype.hasIdempotenceToken = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idempotenceToken: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    planToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    fundToBuyFrom: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    amount: (f = msg.getAmount()) && currency_pb.Money.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.BuyPlanReceivablesRequest;
  return proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotenceToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanToken(value);
      break;
    case 3:
      var value = /** @type {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.Fund} */ (reader.readEnum());
      msg.setFundToBuyFrom(value);
      break;
    case 4:
      var value = new currency_pb.Money;
      reader.readMessage(value,currency_pb.Money.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.Fund} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      currency_pb.Money.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.Fund = {
  F_DO_NOT_USE: 0,
  CREDIT_CARD_FUND_INVESTOR: 1
};

/**
 * optional string idempotence_token = 1;
 * @return {string}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.getIdempotenceToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} returns this
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.setIdempotenceToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} returns this
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.clearIdempotenceToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.hasIdempotenceToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string plan_token = 2;
 * @return {string}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.getPlanToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} returns this
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.setPlanToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} returns this
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.clearPlanToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.hasPlanToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Fund fund_to_buy_from = 3;
 * @return {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.Fund}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.getFundToBuyFrom = function() {
  return /** @type {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.Fund} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.Fund} value
 * @return {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} returns this
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.setFundToBuyFrom = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} returns this
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.clearFundToBuyFrom = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.hasFundToBuyFrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional squareup.common.Money amount = 4;
 * @return {?proto.squareup.common.Money}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.getAmount = function() {
  return /** @type{?proto.squareup.common.Money} */ (
    jspb.Message.getWrapperField(this, currency_pb.Money, 4));
};


/**
 * @param {?proto.squareup.common.Money|undefined} value
 * @return {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} returns this
*/
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} returns this
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.capital.plan.service.BuyPlanReceivablesRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.squareup.capital.plan.service.EmptyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.capital.plan.service.EmptyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.capital.plan.service.EmptyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.EmptyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.squareup.capital.plan.service.EmptyResponse}
 */
proto.squareup.capital.plan.service.EmptyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.capital.plan.service.EmptyResponse;
  return proto.squareup.capital.plan.service.EmptyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.capital.plan.service.EmptyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.capital.plan.service.EmptyResponse}
 */
proto.squareup.capital.plan.service.EmptyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.squareup.capital.plan.service.EmptyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.capital.plan.service.EmptyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.capital.plan.service.EmptyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.capital.plan.service.EmptyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.squareup.capital.plan.service);
