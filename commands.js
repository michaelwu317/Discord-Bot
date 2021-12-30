const { message } = require('prompt');

async function decode(str, msg) {
  str = str.toLowerCase();
  if (str[0] == '.') {
    if (str.indexOf('.introduce') == 0) {
      return "hi I am OG Bot I currently don't really have a purpose"
    } else

      if (str.indexOf('.date') == 0) {
        return Date();

      } else

        if (str.indexOf('.time') == 0) {
          return Date();
        } else
          if (str.indexOf('.calc') == 0) {
            try { return (String)(eval(str.substring(5))); } catch (err) {
              return 'Error: Invalid calculation';
            }
          } else

            if (str.indexOf('.weather') == 0) {
              var x = await weather(str.substring(9));
              return x

            } else return 'Error: Invalid Command';
  }

  if (str.indexOf('hello bot') == 0 || str.indexOf('hi bot') == 0) {
    return "hello!";
  }

  if (str.indexOf('liverpool') != -1) {
    return 'Liverpool FC is the greatest club in the world';
  }

  if (str.indexOf('salah') != -1) {
    return 'Mo Salah is the greatest player in the world and its not even close';
  }

  if (str.indexOf('dumb bot') != -1 || str.indexOf('stupid bot') != -1) {
    return 'A bot can\'t be stupid, only a programmer can';
  }

  if (str.indexOf('ivan') != -1) {
    return 'ivan guan is the goat';
  }

  if (str.indexOf('javascript is dumb') != -1 || str.indexOf('js is dumb') != -1) {
    return 'I agree';
  }

  if (str.indexOf('greatest song') != -1) {
    return 'The greatest song ever is You Will Never Walk Alone by Gerry and the Pacemakers'
  }

  if (str.indexOf('-p ' == 0) != -1) {
    return 'Groovy Bot is retired';
  }

  //return 'YNWA';


}

async function weather(cityName) {
  const fetch = require('node-fetch');

  cityName = cityName[0].toUpperCase() + cityName.substring(1);
  var strw;


  await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=private')
    .then(function (resp) { return resp.json() }) // Convert data to json
    .then(function (data) {

      console.log(data.main.temp);
      strw = JSON.stringify(data.main.temp);
      //msg.reply(JSON.stringify(data.main.temp));

    })

    .catch(function () {
      return 'Invalid Input'
    });
  return 'The current temperature at ' + cityName + ' is ' + (parseInt(strw) - 273.15).toFixed(2) + ' Celcius';
}



module.exports = decode