var React=require('react');
var Weather2=require('./Weather2');

var fun=false;

var Weather1=React.createClass({

getInitialState :function()
{
  return({firstArray:[]});
},
getDataWithLocation:function()
{
console.log("entry point");
$.ajax({
  url:'http://api.openweathermap.org/data/2.5/forecast?q='+this.refs.cityBar.value+'&appid=d845791fab334518eb94c9006971a262',
  dataType:'json',
  async:false,
  type:'GET',
  success:function(data)
  {
    fun=true;
    this.setState({firstArray:data});

  }.bind(this),
  error: function(xhr, status, err)
   {
     console.error(err.toString());
   }.bind(this),

});

},
render:function()
{
  var vname;
  if(fun)
  {
    vname=<Weather2 pval={this.state.firstArray} />
  }
  console.log("pval");
  console.log(this.state.firstArray);
  return(
  <div className="form-group" id="search">
  <center><button type="submit" className="btn btn-sucess" id="btn1">Five day weatherForecast</button></center>
  <div className="h4">
  <h4><bold>Enter the location of your choice:</bold></h4>
  </div>
  <center><input type="text" className="form-control"  ref="cityBar" placeholder="Search" id="search"/></center>
  <center><button type="submit" onClick={this.getDataWithLocation} className="btn btn-Sucess" id="btn">VIEW</button></center>
  {vname}
  </div>
  )
}
})
module.exports=Weather1;

