var React=require('react');

var Weather3=React.createClass({

    render:function(){
    return(
    <center>
    <div className="container-fluid" id="container1">
    <table className="table table-bordered table-inverse" >
    <tbody>
    <tr>
    <th>TEMPERATURE :</th><br/>
    <td>{this.props.temp}</td>
    </tr>
    <br/>

    <tr>
    <th>TEMPERATURE MINIMUM :</th><br/>
    <td>{this.props.temp_min}</td>
    </tr>
    <br/>

    <tr>
    <th>TEMPERATURE MAXIMUM:</th><br/>
    <td>{this.props.temp_max}</td>
    </tr>
    <br/>

    <tr>
    <th>DESCRIPTION :</th><br/>
    <td>{this.props.description}</td>
    </tr>
    <br/>

    <tr>
    <th>PRESSURE :</th><br/>
    <td>{this.props.pressure}</td>
    </tr>  
    <br/>

    <tr>
    <th>HUMIDITY :</th><br/>
    <td>{this.props.humidity}</td>
    </tr>
    <br/>

    <tr>
    <th>DATE AND TIME:</th><br/>
    <td>{this.props.dt_txt}</td>
    </tr>
    <br/>

    <tr>
    <th>CLOUDS :</th><br/>
    <td>{this.props.clouds}</td>
    </tr>
    <br/>

    </tbody>
    </table>
    </div> 
    </center>
  )
}
});
    module.exports=Weather3;

