$(document).ready(function() { 
    var thermostat = new Thermostat

    console.log("FUCK JQUERY!");

    $('#up').click(function() {
      console.log("I have clicked the up button");
    });
//////////

    $('#up').click(function() {
      thermostat.up()
      $('#temperature').text(thermostat.getCurrentTemperature());
      $('#energy_usage').text(thermostat.energyUsage());
    });

    $('#down').click(function() {
      thermostat.down()
      $('#temperature').text(thermostat.getCurrentTemperature());
      $('#energy_usage').text(thermostat.energyUsage());
    });

///////
  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    console.log(thermostat.powerSavingMode);
    $('#power_mode').text('On');
  });

/////////

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    console.log(thermostat.powerSavingMode);
    $('#power_mode').text('Off');
  });

////////////

  $('#reset').click(function() {
    thermostat.resetTemperature()
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#energy_usage').text(thermostat.energyUsage());
  });

//////


    

    
});