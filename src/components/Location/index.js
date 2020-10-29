import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';
import openSocket from "socket.io-client";
import { getGeo } from 'geoplugin';

const socket = openSocket('http:localhost:4000');

export default function Location() {

    const [location, setLocation] = useState([]);

    // useEffect(async () => {
    //     getGeo().then(res => {
    //         setLocation(location.push({ ...res }));
    //     });
    // }, []);
    return (
        <div>
            <p>Location</p>
            <Table responsive={true}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>IP</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Area</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        location.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.request}</td>
                                    <td>{item.city}</td>
                                    <td>{item.countryName}</td>
                                    <td>{item.continentName}</td>
                                </tr>
                            )
                        })
                    } */}
                </tbody>
            </Table>
        </div>
    )
}
