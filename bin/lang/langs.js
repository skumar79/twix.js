// Generated by CoffeeScript 1.6.3
(function() {
  moment.lang('fr-ca', {
    twix: $.extend(true, {}, Twix.defaults, {
      twentyFourHour: true,
      allDayMonth: {
        fn: function(options) {
          return function(date) {
            return date.format(" " + options.dayFormat + " " + options.monthFormat);
          };
        },
        slot: 3
      },
      month: {
        slot: 3
      },
      date: {
        slot: 2
      }
    })
  });

}).call(this);
// Generated by CoffeeScript 1.6.3
(function() {
  moment.lang('fr', {
    twix: $.extend(true, {}, Twix.defaults, {
      twentyFourHour: true,
      allDayMonth: {
        fn: function(options) {
          return function(date) {
            return date.format(" " + options.dayFormat + " " + options.monthFormat);
          };
        },
        slot: 3
      },
      month: {
        slot: 3
      },
      date: {
        slot: 2
      }
    })
  });

}).call(this);
