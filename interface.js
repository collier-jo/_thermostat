$(document).ready(function() { 
    var thermostat = new Thermostat

    console.log("FUCK JQUERY!");

    $('#up').click(function() {
      console.log("I have clicked the up button");
    });
//////////

    $('#up').click(function() {
      thermostat.up()
      $('#Temperature').text(thermostat.getCurrentTemperature());
      $('#Energy_Usage').text(thermostat.energyUsage());
    });

    $('#down').click(function() {
      thermostat.down()
      $('#Temperature').text(thermostat.getCurrentTemperature());
      $('#Energy_Usage').text(thermostat.energyUsage());
    });

///////
  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    console.log(thermostat.powerSavingMode);
    $('#Power_Mode').text('On');
  });

/////////

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    console.log(thermostat.powerSavingMode);
    $('#Power_Mode').text('Off');
  });

////////////

  $('#reset').click(function() {
    thermostat.resetTemperature()
    $('#Temperature').text(thermostat.getCurrentTemperature());
    $('#Energy_Usage').text(thermostat.energyUsage());
  });

//////


    

    
});