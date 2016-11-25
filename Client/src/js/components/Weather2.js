var React=require('react');
var Weather3=require('./Weather3');

var Weather2=React.createClass({
render:function()
{
    var newarray=[];
    var temp='';
    var temp_min='';
    var temp_max='';
    var description='';
    var pressure='';
    var humidity='';
    var clouds='';
    var dt_txt='';

    var cArray=this.props.pval;
    cArray.list.forEach(function(parame){

         temp=parame.main.temp;
         temp_min=parame.main.temp_min;
         temp_max=parame.main.temp_max;
         description=parame.weather[0].description;
         pressure=parame.main.pressure;
         humidity=parame.main.humidity;
         clouds=parame.clouds.all;
         dt_txt=parame.dt_txt;
         
         newarray.push(<Weather3 temp={temp} temp_min={temp_min} temp_max={temp_max} description={description} clouds={clouds} pressure={pressure} humidity={humidity} dt_txt={dt_txt} />);
    });
         return(
         <center>
         <div className="container-fluid" id="container">
         <table className="table table-inbox table-hover" >
                  <tbody>
                  {newarray}
                  </tbody>
                  </table>
                  </div> 
                  </center>
        )
}
});
module.exports=Weather2;

