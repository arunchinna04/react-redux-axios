import React, { Component} from 'react'
import { Card,CardHeader,CardMedia,CardTitle,CardText  } from 'material-ui';
import { RouteHandler, Link } from 'react-router';



export default class DashBoard extends Component {

  

  render(){
    return (
            <Card>
                <CardHeader
                  title="URL Avatar"
                  subtitle="Subtitle"
                  avatar="http://lorempixel.com/100/100/nature/"
                />
                <CardMedia
                  overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                   <img src="http://lorempixel.com/600/337/nature/" />
               </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              
            </Card>
   )
  }

}

