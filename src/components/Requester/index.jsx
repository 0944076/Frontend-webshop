import ReactDOM from 'react-dom';
import React, { Component, Children } from "react";
import { Link } from "react-router-dom";
import { Fetch } from 'react-request';
import { string } from 'postcss-selector-parser';


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';



class Get extends Component {
    render() {
        return (
          <Fetch url={this.props.url+this.props.id}>
            {({ fetching, failed, data }) => {
              if (fetching) {
                return <div>Loading data...</div>;
              }
     
              if (failed) {
                return <div>The request did not succeed.</div>;
              }
     
              if (data) {
                
                
                 
                  let datafilter = [];

                  for (let i=0; i < this.props.listofdata.length; i++) {
                    datafilter[i] = eval(this.props.listofdata[i]);
                  }


                  console.log("dataobject",data);
                  let array1 = [];
                  const data1 = data;
                
                  array1.push(data);
                  console.log("datajsonstringify",JSON.stringify(data));
                  console.log("array1",array1);
                  console.log("datalength");

                return (
                 
                 
                    
                  
                    //data1

                    datafilter
                    
                 

                    
                  
                  
                  
                   
                );
              }
     
              return null;
            }}
          </Fetch>
        );
      }
    }

export default Get;


















