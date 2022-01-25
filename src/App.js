import React, { useState, useEffect } from 'react';
import './App.css';

import { ListActivePlanTokensRequest } from "./protos/service_pb"
import { PlanServiceClient } from "./protos/service_grpc_web_pb"

var client = new PlanServiceClient('http://localhost:8000')
function App() {
  const [plans, setPlans] = useState(-9999);

  const getPlans = () => {
    console.log("called")

    var request = new ListActivePlanTokensRequest()
    debugger;
    var stream = client.listActivePlanTokens(request, {})

    stream.on('data', function(response) {
      console.log("in stream", response)
      setPlans(response.getValue())
    });
  };

  useEffect(()=>{
    getPlans()
  },[]);

  return (
    <div>
      Temperature : {plans[0]} F
    </div>
  );
}

export default App;
