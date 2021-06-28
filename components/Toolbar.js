import React from'react';
import {Appbar} from 'react-native-paper';

const toolbar = ()=> (
    <Appbar.Header style={{backgroundColor:'#219ddb'}}>
         <Appbar.Content title="Tabtracker" />
    </Appbar.Header>
);

export default toolbar;