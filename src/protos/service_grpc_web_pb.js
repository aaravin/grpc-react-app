/**
 * @fileoverview gRPC-Web generated client stub for squareup.capital.plan.service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')

var models_pb = require('./models_pb.js')

var currency_pb = require('./currency_pb.js')

var currency_codes_pb = require('./currency_codes_pb.js')

var time_pb = require('./time_pb.js')

var validation_pb = require('./validation_pb.js')

var error_pb = require('./error_pb.js')

var countries_pb = require('./countries_pb.js')

var options_sake_pb = require('./options_sake_pb.js')
const proto = {};
proto.squareup = {};
proto.squareup.capital = {};
proto.squareup.capital.plan = {};
proto.squareup.capital.plan.service = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.squareup.capital.plan.service.PlanServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.AddPlanPayerRequest,
 *   !proto.squareup.capital.plan.service.EmptyResponse>}
 */
const methodDescriptor_PlanService_AddPlanPayer = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/AddPlanPayer',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.AddPlanPayerRequest,
  proto.squareup.capital.plan.service.EmptyResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.AddPlanPayerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.AddPlanPayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.addPlanPayer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/AddPlanPayer',
      request,
      metadata || {},
      methodDescriptor_PlanService_AddPlanPayer,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.AddPlanPayerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.addPlanPayer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/AddPlanPayer',
      request,
      metadata || {},
      methodDescriptor_PlanService_AddPlanPayer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.AllocatePlanRequest,
 *   !proto.squareup.capital.plan.service.AllocatePlanResponse>}
 */
const methodDescriptor_PlanService_AllocatePlan = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/AllocatePlan',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.AllocatePlanRequest,
  proto.squareup.capital.plan.service.AllocatePlanResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.AllocatePlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.AllocatePlanResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.AllocatePlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.AllocatePlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.AllocatePlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.allocatePlan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/AllocatePlan',
      request,
      metadata || {},
      methodDescriptor_PlanService_AllocatePlan,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.AllocatePlanRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.AllocatePlanResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.allocatePlan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/AllocatePlan',
      request,
      metadata || {},
      methodDescriptor_PlanService_AllocatePlan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.CancelPlanRequest,
 *   !proto.squareup.capital.plan.service.CancelPlanResponse>}
 */
const methodDescriptor_PlanService_CancelPlan = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/CancelPlan',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.CancelPlanRequest,
  proto.squareup.capital.plan.service.CancelPlanResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.CancelPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.CancelPlanResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.CancelPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.CancelPlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.CancelPlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.cancelPlan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/CancelPlan',
      request,
      metadata || {},
      methodDescriptor_PlanService_CancelPlan,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.CancelPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.CancelPlanResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.cancelPlan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/CancelPlan',
      request,
      metadata || {},
      methodDescriptor_PlanService_CancelPlan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest,
 *   !proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse>}
 */
const methodDescriptor_PlanService_UpdateEnabledPaymentSchedule = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/UpdateEnabledPaymentSchedule',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest,
  proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.updateEnabledPaymentSchedule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/UpdateEnabledPaymentSchedule',
      request,
      metadata || {},
      methodDescriptor_PlanService_UpdateEnabledPaymentSchedule,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.UpdateEnabledPaymentScheduleResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.updateEnabledPaymentSchedule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/UpdateEnabledPaymentSchedule',
      request,
      metadata || {},
      methodDescriptor_PlanService_UpdateEnabledPaymentSchedule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.CreatePlanRequestV2,
 *   !proto.squareup.capital.plan.service.CreatePlanResponse>}
 */
const methodDescriptor_PlanService_CreatePlanV2 = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/CreatePlanV2',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.CreatePlanRequestV2,
  proto.squareup.capital.plan.service.CreatePlanResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.CreatePlanRequestV2} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.CreatePlanResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequestV2} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.CreatePlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.CreatePlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.createPlanV2 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/CreatePlanV2',
      request,
      metadata || {},
      methodDescriptor_PlanService_CreatePlanV2,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequestV2} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.CreatePlanResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.createPlanV2 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/CreatePlanV2',
      request,
      metadata || {},
      methodDescriptor_PlanService_CreatePlanV2);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.ActivatePlanRequest,
 *   !proto.squareup.capital.plan.service.ActivatePlanResponse>}
 */
const methodDescriptor_PlanService_ActivatePlan = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/ActivatePlan',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.ActivatePlanRequest,
  proto.squareup.capital.plan.service.ActivatePlanResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.ActivatePlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.ActivatePlanResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.ActivatePlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.ActivatePlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.ActivatePlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.activatePlan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ActivatePlan',
      request,
      metadata || {},
      methodDescriptor_PlanService_ActivatePlan,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.ActivatePlanRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.ActivatePlanResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.activatePlan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ActivatePlan',
      request,
      metadata || {},
      methodDescriptor_PlanService_ActivatePlan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.CreatePlanRequest,
 *   !proto.squareup.capital.plan.service.CreatePlanResponse>}
 */
const methodDescriptor_PlanService_CreatePlan = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/CreatePlan',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.CreatePlanRequest,
  proto.squareup.capital.plan.service.CreatePlanResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.CreatePlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.CreatePlanResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.CreatePlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.CreatePlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.createPlan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/CreatePlan',
      request,
      metadata || {},
      methodDescriptor_PlanService_CreatePlan,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.CreatePlanRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.CreatePlanResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.createPlan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/CreatePlan',
      request,
      metadata || {},
      methodDescriptor_PlanService_CreatePlan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.GetPlanRequest,
 *   !proto.squareup.capital.plan.service.GetPlanResponse>}
 */
const methodDescriptor_PlanService_GetPlan = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/GetPlan',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.GetPlanRequest,
  proto.squareup.capital.plan.service.GetPlanResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.GetPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.GetPlanResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.GetPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.GetPlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.GetPlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.getPlan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/GetPlan',
      request,
      metadata || {},
      methodDescriptor_PlanService_GetPlan,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.GetPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.GetPlanResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.getPlan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/GetPlan',
      request,
      metadata || {},
      methodDescriptor_PlanService_GetPlan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.GetTxnRequest,
 *   !proto.squareup.capital.plan.service.GetTxnResponse>}
 */
const methodDescriptor_PlanService_GetTxn = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/GetTxn',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.GetTxnRequest,
  proto.squareup.capital.plan.service.GetTxnResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.GetTxnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.GetTxnResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.GetTxnRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.GetTxnResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.GetTxnResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.getTxn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/GetTxn',
      request,
      metadata || {},
      methodDescriptor_PlanService_GetTxn,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.GetTxnRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.GetTxnResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.getTxn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/GetTxn',
      request,
      metadata || {},
      methodDescriptor_PlanService_GetTxn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.ListActivePlanTokensRequest,
 *   !proto.squareup.capital.plan.service.ListActivePlanTokensResponse>}
 */
const methodDescriptor_PlanService_ListActivePlanTokens = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/ListActivePlanTokens',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.ListActivePlanTokensRequest,
  proto.squareup.capital.plan.service.ListActivePlanTokensResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.ListActivePlanTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.ListActivePlanTokensResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.ListActivePlanTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.ListActivePlanTokensResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.ListActivePlanTokensResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.listActivePlanTokens =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ListActivePlanTokens',
      request,
      metadata || {},
      methodDescriptor_PlanService_ListActivePlanTokens,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.ListActivePlanTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.ListActivePlanTokensResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.listActivePlanTokens =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ListActivePlanTokens',
      request,
      metadata || {},
      methodDescriptor_PlanService_ListActivePlanTokens);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.ListPlansRequest,
 *   !proto.squareup.capital.plan.service.ListPlansResponse>}
 */
const methodDescriptor_PlanService_ListPlans = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/ListPlans',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.ListPlansRequest,
  proto.squareup.capital.plan.service.ListPlansResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.ListPlansRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.ListPlansResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.ListPlansRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.ListPlansResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.ListPlansResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.listPlans =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ListPlans',
      request,
      metadata || {},
      methodDescriptor_PlanService_ListPlans,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.ListPlansRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.ListPlansResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.listPlans =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ListPlans',
      request,
      metadata || {},
      methodDescriptor_PlanService_ListPlans);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.ListPlansByCustomerRequest,
 *   !proto.squareup.capital.plan.service.ListPlansByCustomerResponse>}
 */
const methodDescriptor_PlanService_ListPlansByCustomer = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/ListPlansByCustomer',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.ListPlansByCustomerRequest,
  proto.squareup.capital.plan.service.ListPlansByCustomerResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.ListPlansByCustomerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.ListPlansByCustomerResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.ListPlansByCustomerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.ListPlansByCustomerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.ListPlansByCustomerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.listPlansByCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ListPlansByCustomer',
      request,
      metadata || {},
      methodDescriptor_PlanService_ListPlansByCustomer,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.ListPlansByCustomerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.ListPlansByCustomerResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.listPlansByCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ListPlansByCustomer',
      request,
      metadata || {},
      methodDescriptor_PlanService_ListPlansByCustomer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.ListPlanTxnsRequest,
 *   !proto.squareup.capital.plan.service.ListPlanTxnsResponse>}
 */
const methodDescriptor_PlanService_ListPlanTxns = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/ListPlanTxns',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.ListPlanTxnsRequest,
  proto.squareup.capital.plan.service.ListPlanTxnsResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.ListPlanTxnsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.ListPlanTxnsResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.ListPlanTxnsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.ListPlanTxnsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.ListPlanTxnsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.listPlanTxns =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ListPlanTxns',
      request,
      metadata || {},
      methodDescriptor_PlanService_ListPlanTxns,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.ListPlanTxnsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.ListPlanTxnsResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.listPlanTxns =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ListPlanTxns',
      request,
      metadata || {},
      methodDescriptor_PlanService_ListPlanTxns);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.MakePlanPaymentRequest,
 *   !proto.squareup.capital.plan.service.MakePlanPaymentResponse>}
 */
const methodDescriptor_PlanService_MakePlanPayment = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/MakePlanPayment',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.MakePlanPaymentRequest,
  proto.squareup.capital.plan.service.MakePlanPaymentResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.MakePlanPaymentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.MakePlanPaymentResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.MakePlanPaymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.MakePlanPaymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.makePlanPayment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/MakePlanPayment',
      request,
      metadata || {},
      methodDescriptor_PlanService_MakePlanPayment,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.MakePlanPaymentResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.makePlanPayment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/MakePlanPayment',
      request,
      metadata || {},
      methodDescriptor_PlanService_MakePlanPayment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest,
 *   !proto.squareup.capital.plan.service.EmptyResponse>}
 */
const methodDescriptor_PlanService_MakePlanPaymentAndSettle = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/MakePlanPaymentAndSettle',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest,
  proto.squareup.capital.plan.service.EmptyResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.makePlanPaymentAndSettle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/MakePlanPaymentAndSettle',
      request,
      metadata || {},
      methodDescriptor_PlanService_MakePlanPaymentAndSettle,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.MakePlanPaymentAndSettleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.makePlanPaymentAndSettle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/MakePlanPaymentAndSettle',
      request,
      metadata || {},
      methodDescriptor_PlanService_MakePlanPaymentAndSettle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.MakePlanRefundRequest,
 *   !proto.squareup.capital.plan.service.MakePlanRefundResponse>}
 */
const methodDescriptor_PlanService_MakePlanRefund = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/MakePlanRefund',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.MakePlanRefundRequest,
  proto.squareup.capital.plan.service.MakePlanRefundResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.MakePlanRefundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.MakePlanRefundResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.MakePlanRefundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.MakePlanRefundResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.MakePlanRefundResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.makePlanRefund =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/MakePlanRefund',
      request,
      metadata || {},
      methodDescriptor_PlanService_MakePlanRefund,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.MakePlanRefundRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.MakePlanRefundResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.makePlanRefund =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/MakePlanRefund',
      request,
      metadata || {},
      methodDescriptor_PlanService_MakePlanRefund);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.OriginatePlanRequest,
 *   !proto.squareup.capital.plan.service.OriginatePlanResponse>}
 */
const methodDescriptor_PlanService_OriginatePlan = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/OriginatePlan',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.OriginatePlanRequest,
  proto.squareup.capital.plan.service.OriginatePlanResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.OriginatePlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.OriginatePlanResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.OriginatePlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.OriginatePlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.OriginatePlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.originatePlan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/OriginatePlan',
      request,
      metadata || {},
      methodDescriptor_PlanService_OriginatePlan,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.OriginatePlanRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.OriginatePlanResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.originatePlan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/OriginatePlan',
      request,
      metadata || {},
      methodDescriptor_PlanService_OriginatePlan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.SearchPlansRequest,
 *   !proto.squareup.capital.plan.service.SearchPlansResponse>}
 */
const methodDescriptor_PlanService_SearchPlans = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/SearchPlans',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.SearchPlansRequest,
  proto.squareup.capital.plan.service.SearchPlansResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.SearchPlansRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.SearchPlansResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.SearchPlansRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.SearchPlansResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.SearchPlansResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.searchPlans =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/SearchPlans',
      request,
      metadata || {},
      methodDescriptor_PlanService_SearchPlans,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.SearchPlansRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.SearchPlansResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.searchPlans =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/SearchPlans',
      request,
      metadata || {},
      methodDescriptor_PlanService_SearchPlans);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.FailPlanPaymentRequest,
 *   !proto.squareup.capital.plan.service.FailPlanPaymentResponse>}
 */
const methodDescriptor_PlanService_FailPlanPayment = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/FailPlanPayment',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.FailPlanPaymentRequest,
  proto.squareup.capital.plan.service.FailPlanPaymentResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.FailPlanPaymentResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.FailPlanPaymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.FailPlanPaymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.failPlanPayment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/FailPlanPayment',
      request,
      metadata || {},
      methodDescriptor_PlanService_FailPlanPayment,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.FailPlanPaymentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.FailPlanPaymentResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.failPlanPayment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/FailPlanPayment',
      request,
      metadata || {},
      methodDescriptor_PlanService_FailPlanPayment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.RemovePlanPayerRequest,
 *   !proto.squareup.capital.plan.service.EmptyResponse>}
 */
const methodDescriptor_PlanService_RemovePlanPayer = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/RemovePlanPayer',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.RemovePlanPayerRequest,
  proto.squareup.capital.plan.service.EmptyResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.removePlanPayer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/RemovePlanPayer',
      request,
      metadata || {},
      methodDescriptor_PlanService_RemovePlanPayer,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.RemovePlanPayerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.removePlanPayer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/RemovePlanPayer',
      request,
      metadata || {},
      methodDescriptor_PlanService_RemovePlanPayer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.ReversePlanPaymentRequest,
 *   !proto.squareup.capital.plan.service.ReversePlanPaymentResponse>}
 */
const methodDescriptor_PlanService_ReversePlanPayment = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/ReversePlanPayment',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.ReversePlanPaymentRequest,
  proto.squareup.capital.plan.service.ReversePlanPaymentResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.ReversePlanPaymentResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.ReversePlanPaymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.ReversePlanPaymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.reversePlanPayment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ReversePlanPayment',
      request,
      metadata || {},
      methodDescriptor_PlanService_ReversePlanPayment,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.ReversePlanPaymentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.ReversePlanPaymentResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.reversePlanPayment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ReversePlanPayment',
      request,
      metadata || {},
      methodDescriptor_PlanService_ReversePlanPayment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.ListPlanPerformancesRequest,
 *   !proto.squareup.capital.plan.service.ListPlanPerformancesResponse>}
 */
const methodDescriptor_PlanService_ListPlanPerformances = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/ListPlanPerformances',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.ListPlanPerformancesRequest,
  proto.squareup.capital.plan.service.ListPlanPerformancesResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.ListPlanPerformancesResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.ListPlanPerformancesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.ListPlanPerformancesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.listPlanPerformances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ListPlanPerformances',
      request,
      metadata || {},
      methodDescriptor_PlanService_ListPlanPerformances,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.ListPlanPerformancesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.ListPlanPerformancesResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.listPlanPerformances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ListPlanPerformances',
      request,
      metadata || {},
      methodDescriptor_PlanService_ListPlanPerformances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest,
 *   !proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse>}
 */
const methodDescriptor_PlanService_SearchPlanDelinquencies = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/SearchPlanDelinquencies',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest,
  proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.searchPlanDelinquencies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/SearchPlanDelinquencies',
      request,
      metadata || {},
      methodDescriptor_PlanService_SearchPlanDelinquencies,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.SearchPlanDelinquenciesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.SearchPlanDelinquenciesResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.searchPlanDelinquencies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/SearchPlanDelinquencies',
      request,
      metadata || {},
      methodDescriptor_PlanService_SearchPlanDelinquencies);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest,
 *   !proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse>}
 */
const methodDescriptor_PlanService_ListPlanPastDueSnapshots = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/ListPlanPastDueSnapshots',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest,
  proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.listPlanPastDueSnapshots =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ListPlanPastDueSnapshots',
      request,
      metadata || {},
      methodDescriptor_PlanService_ListPlanPastDueSnapshots,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.ListPlanPastDueSnapshotsResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.listPlanPastDueSnapshots =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ListPlanPastDueSnapshots',
      request,
      metadata || {},
      methodDescriptor_PlanService_ListPlanPastDueSnapshots);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.AddPlanTagsRequest,
 *   !proto.squareup.capital.plan.service.EmptyResponse>}
 */
const methodDescriptor_PlanService_AddPlanTags = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/AddPlanTags',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.AddPlanTagsRequest,
  proto.squareup.capital.plan.service.EmptyResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.AddPlanTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.AddPlanTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.addPlanTags =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/AddPlanTags',
      request,
      metadata || {},
      methodDescriptor_PlanService_AddPlanTags,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.AddPlanTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.addPlanTags =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/AddPlanTags',
      request,
      metadata || {},
      methodDescriptor_PlanService_AddPlanTags);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.ApplyServiceCreditRequest,
 *   !proto.squareup.capital.plan.service.EmptyResponse>}
 */
const methodDescriptor_PlanService_ApplyServiceCredit = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/ApplyServiceCredit',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.ApplyServiceCreditRequest,
  proto.squareup.capital.plan.service.EmptyResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.applyServiceCredit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ApplyServiceCredit',
      request,
      metadata || {},
      methodDescriptor_PlanService_ApplyServiceCredit,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.ApplyServiceCreditRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.applyServiceCredit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/ApplyServiceCredit',
      request,
      metadata || {},
      methodDescriptor_PlanService_ApplyServiceCredit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.squareup.capital.plan.service.BuyPlanReceivablesRequest,
 *   !proto.squareup.capital.plan.service.EmptyResponse>}
 */
const methodDescriptor_PlanService_BuyPlanReceivables = new grpc.web.MethodDescriptor(
  '/squareup.capital.plan.service.PlanService/BuyPlanReceivables',
  grpc.web.MethodType.UNARY,
  proto.squareup.capital.plan.service.BuyPlanReceivablesRequest,
  proto.squareup.capital.plan.service.EmptyResponse,
  /**
   * @param {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.squareup.capital.plan.service.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.squareup.capital.plan.service.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squareup.capital.plan.service.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squareup.capital.plan.service.PlanServiceClient.prototype.buyPlanReceivables =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/BuyPlanReceivables',
      request,
      metadata || {},
      methodDescriptor_PlanService_BuyPlanReceivables,
      callback);
};


/**
 * @param {!proto.squareup.capital.plan.service.BuyPlanReceivablesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squareup.capital.plan.service.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.squareup.capital.plan.service.PlanServicePromiseClient.prototype.buyPlanReceivables =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/squareup.capital.plan.service.PlanService/BuyPlanReceivables',
      request,
      metadata || {},
      methodDescriptor_PlanService_BuyPlanReceivables);
};


module.exports = proto.squareup.capital.plan.service;

