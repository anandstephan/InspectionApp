import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useDispatch, useSelector} from 'react-redux';
// import {setBadges} from '../../redux/features/GlobalSlice';

export const login = async ({email, password}) => {
  console.log('agya', email, password);
  let response = {
    error: '',
    data: {},
  };
  try {
    const data = await axios.post('https://crm.unificars.com/api/cjlogin', {
      email: email,
      password: password,
    });
    console.log('===', data.data);

    return data.data;
  } catch (error) {
    console.log('ERror', error);
    return error;
  }
};
export const submitForm = async ({data}) => {
  let response = {
    error: '',
    data: {},
  };
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(
      'https://crm.unificars.com/api/submitbyinspection',
      requestOptions,
    );
    response.data = await res.json();

    return response;
  } catch (error) {
    console.log('==========================================================');
    console.log('error =>', error);
    console.log('==========================================================');
    return response;
  }
};

export const allInspection = async (id, status) => {
  console.log('id =>', id, ' status =>', status);
  let response = {
    error: '',
    data: {},
  };
  try {
    response.data = await axios.post(
      'https://crm.unificars.com/api/todayinspection',
      {
        cj_id: id,
        status: status,
      },
    );
    // console.log('for res ', status, ' =>', response.data.data);
    // console.log(" obj =>",obj)

    // dispatch(setBadges(obj));
    // console.log("api badges=>",badges);
    return response.data;
  } catch (error) {
    return response;
  }
};

export const documentsForm = async ({leadId, type}) => {
  let response = {
    error: '',
    data: {},
  };
  try {
    response.data = await axios.post(
      'https://crm.unificars.com/api/cjinspection1',
      {
        lead_id: leadId,
        type: type,
      },
    );
    // console.log(response,'documents')
    return response.data.data;
  } catch (error) {
    return response;
  }
};
export const getUserProfileDetails = async ({id}) => {
  // let response ={
  //     error:'',
  //     data:{},
  // };
  try {
    let response = await axios.post('https://crm.unificars.com/api/cjprofile', {
      cj_id: id,
    });
    // console.log('all inspactions =>',response.data)
    return response;
  } catch (error) {
    console.log('response =', error);
    return error;
  }
};

export const submitCarNumber = async carNumber => {
  try {
    // if (carNumber.length === 13) {
    console.log('====', carNumber);
    const number = carNumber.replace(/\s/g, ''); // Remove spaces from the car number
    // console.log(number, "number");

    const response = await axios.post(
      'https://api.invincibleocean.com/invincible/vehicleRcV6',
      {
        vehicleNumber: '' + number,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          secretKey:
            'MeCeLbdwp5KCuFuuCcQIuUKDTw5xyHPJT91zovHRmA5d6jBxAficW5kIP1DGvhNXL',
          clientId:
            'd0d3422ec6d0ae9e4ed989dda9425204:b94cec676f7fb97bf04173cc262aeb9f',
        },
      },
    );

    // const response = {
    //   code: 200,
    //   result: {
    //     data: {
    //       regNo: 'DL6SBC8723',
    //       chassis: 'ME4JF50AJKW230060',
    //       engine: 'JF50EW0229487',
    //       vehicleManufacturerName: 'HONDA MOTORCYCLE AND SCOOTER INDIA (P) LTD',
    //       model: 'ACTIVA 5G',
    //       vehicleColour: 'GRAY',
    //       type: 'PETROL',
    //       normsType: 'BHARAT STAGE IV',
    //       bodyType: 'FULLY BUILD',
    //       ownerCount: 1,
    //       owner: 'SAIYAD TALIB ALI',
    //       ownerFatherName: 'ASIF ALI',
    //       mobileNumber: '',
    //       status: 'Y',
    //       statusAsOn: '05-Aug-2024',
    //       regAuthority: 'SARAI KALE KHAN',
    //       regDate: '01-Oct-2019',
    //       vehicleManufacturingMonthYear: '9/2019',
    //       rcExpiryDate: '30-Sep-2034',
    //       vehicleTaxUpto: '',
    //       vehicleInsuranceCompanyName: 'NA',
    //       vehicleInsuranceUpto: '29-Sep-2024',
    //       vehicleInsurancePolicyNumber: '/00/005230',
    //       rcFinancer: 'SHRIRAM CITY UNION FINANCE LTD',
    //       presentAddress:
    //         'J-33 J-EXTENSION STREET NO-8 LAXMI NAGAR  93 East DL Delhi 110092',
    //       permanentAddress:
    //         'J-33 J-EXTENSION STREET NO-8 LAXMI NAGAR  93 East DL Delhi 110092',
    //       vehicleCubicCapacity: 109.19,
    //       grossVehicleWeight: 279,
    //       unladenWeight: 109,
    //       vehicleCategory: '2WN',
    //       rcStandardCap: '',
    //       vehicleCylindersNo: 1,
    //       vehicleSeatCapacity: 2,
    //       vehicleSleeperCapacity: '',
    //       vehicleStandingCapacity: '',
    //       wheelbase: 1238,
    //       vehicleNumber: 'DL6SBC8723',
    //       puccNumber: 'DL01300110043136',
    //       puccUpto: '27-Jun-2024',
    //       blacklistStatus: 'NA',
    //       blacklistDetails: [],
    //       permitIssueDate: null,
    //       permitNumber: null,
    //       permitType: null,
    //       permitValidFrom: null,
    //       permitValidUpto: null,
    //       nonUseStatus: null,
    //       nonUseFrom: null,
    //       nonUseTo: null,
    //       nationalPermitNumber: null,
    //       nationalPermitUpto: null,
    //       nationalPermitIssuedBy: null,
    //       isCommercial: false,
    //       nocDetails: null,
    //       dbResult: false,
    //       partialData: true,
    //       mmvResponse: null,
    //       financed: true,
    //       class: 'M-Cycle/Scooter',
    //     },
    //   },
    // };
    // return Promise.resolve(response);
    console.log('Api response', response.data);
    return response.data;

    // } else {
    //   console.error("Invalid car number length");
    // }
  } catch (error) {
    console.log(error);
  }
};

export const submitRegistormFomFitness = async ({data}) => {
  let response = {
    error: '',
    data: {},
  };
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(
      'https://crm.unificars.com/api/submitFitnessForm',
      requestOptions,
    );
    response.data = await res.json();

    return response;
  } catch (error) {
    console.log('==========================================================');
    console.log('error =>', error);
    console.log('==========================================================');
    response.error = error;
    return response;
  }
};

export const openPhoneDialer = async number => {
  // Linking.openURL(`tel:${number}`);
  // setCallLoading(true);
  let userDetails = await AsyncStorage.getItem('user');
  console.log('===><===', JSON.parse(userDetails).phone);
  let cJPhoneNumber = JSON.parse(userDetails).phone;
  console.log('==CJ', cJPhoneNumber);

  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjExNDIyMiwiaXNzIjoiaHR0cHM6XC9cL2N1c3RvbWVyLnNlcnZldGVsLmluXC90b2tlblwvZ2VuZXJhdGUiLCJpYXQiOjE2Njk3MjE1NTgsImV4cCI6MTk2OTcyMTU1OCwibmJmIjoxNjY5NzIxNTU4LCJqdGkiOiI4aENQWTNsMlhXM1FLQmZJIn0.gcTBpzhnrOYJPfuyzTrzpN5z54NpPisYnBS6TLcNjX0',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      destination_number: number,
      agent_number: cJPhoneNumber,
    }),
  };

  fetch('https://api.servetel.in/v1/click_to_call', requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('Error');
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      console.log('MyData', data); // Handle the successful response data here
      // setLoading(false);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
};
