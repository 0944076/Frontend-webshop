import ReactDOM from 'react-dom';
import React, { Component, Children } from "react";
import { Link } from "react-router-dom";
import { Fetch } from 'react-request';
import { string } from 'postcss-selector-parser';


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';



function Getter(url,id,listofdata) {
    
        
         let info2 = <Fetch url={url+id}>
            {({ fetching, failed, data }) => {
              if (fetching) {
                return <div>Loading data...</div>;
              }
     
              if (failed) {
                return <div>The request did not succeed.</div>;
              }
     
              if (data) {
                
                
                 
                  let datafilter = [];

                  for (let i=0; i < listofdata.length; i++) {
                    datafilter[i] = eval(listofdata[i]);
                  }


                  console.log("dataobject",data);
                  let array1 = [];
                  const data1 = data;
                
                  array1.push(data);
                  console.log("datajsonstringify",JSON.stringify(data));
                  
                  

                
                 
                 
                    
                  
                    

                    //{datafilter}
                    
                 

                    console.log("checkhier",data1.naam);
                return(data1);
                  
                  
                  
                   
                
              }
     
              return null;
            }}
          </Fetch>
          
          console.log("checkhier2",info2.data1);
       return info2;
      }
    

export default Getter;


















