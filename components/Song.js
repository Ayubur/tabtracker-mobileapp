import React from 'react';
import {View,Text,Image} from 'react-native';
import { Card,Title, Paragraph, Button } from 'react-native-paper';


const Song = () =>(
    <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
            <Title>Oniket Prantor</Title>
            <Text>
                Artcell
            </Text>
        </Card.Content>
        <Card.Actions>
            <Button style={{backgroundColor:'green'}}><Text style={{color:'#fff'}}>Details</Text></Button>
            <Button style={{backgroundColor:'green', marginLeft:5}}><Text style={{color:'#fff'}}>Bookmark</Text></Button>
        </Card.Actions>
    </Card>
);

export default Song;