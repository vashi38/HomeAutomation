/** @ngInject */
function MyDataService($http, $log) {
  const URL = 'myhome.html/?';
  function _getIntialState() {
    return Promise.resolve({
      1: {
        id: 1,
        name: 'Room 1',
        SwitchBoards: {
          1: {
            id: 1,
            name: 'Switch Board 1',
            switches: {
              1: {
                id: 1,
                name: 'Sw 1',
                type: 'TOGGLE',
                state: {
                  active: true
                }
              },
              2: {
                id: 2,
                name: 'Sw 2',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              3: {
                id: 3,
                name: 'Sw 3',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              4: {
                id: 4,
                name: 'Sw 4',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              5: {
                id: 5,
                name: 'Sw 5',
                type: 'KNOB',
                state: {
                  active: false,
                  val: 2
                }
              },
              6: {
                id: 6,
                name: 'Sw 6',
                type: 'KNOB',
                state: {
                  active: false,
                  val: 2
                }
              }
            }
          },
          2: {
            id: 2,
            name: 'Switch Board 2',
            switches: {
              1: {
                id: 1,
                name: 'Sw 1',
                type: 'TOGGLE',
                state: {
                  active: true
                }
              },
              2: {
                id: 2,
                name: 'Sw 2',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              3: {
                id: 3,
                name: 'Sw 3',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              4: {
                id: 4,
                name: 'Sw 4',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              5: {
                id: 5,
                name: 'Sw 5',
                type: 'KNOB',
                state: {
                  active: false,
                  val: 2
                }
              },
              6: {
                id: 6,
                name: 'Sw 6',
                type: 'KNOB',
                state: {
                  active: false,
                  val: 2
                }
              }
            }
          },
          3: {
            id: 3,
            name: 'Switch Board 3',
            switches: {
              1: {
                id: 1,
                name: 'Sw 1',
                type: 'TOGGLE',
                state: {
                  active: true
                }
              },
              2: {
                id: 2,
                name: 'Sw 2',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              3: {
                id: 3,
                name: 'Sw 3',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              4: {
                id: 4,
                name: 'Sw 4',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              5: {
                id: 5,
                name: 'Sw 5',
                type: 'KNOB',
                state: {
                  active: false,
                  val: 2
                }
              },
              6: {
                id: 6,
                name: 'Sw 6',
                type: 'KNOB',
                state: {
                  active: false,
                  val: 2
                }
              }
            }
          }
        }
      },
      2: {
        id: 2,
        name: 'Room 2',
        SwitchBoards: {
          1: {
            id: 1,
            name: 'Switch Board 1',
            switches: {
              1: {
                id: 1,
                name: 'Sw 1',
                type: 'TOGGLE',
                state: {
                  active: true
                }
              },
              2: {
                id: 2,
                name: 'Sw 2',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              3: {
                id: 3,
                name: 'Sw 3',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              4: {
                id: 4,
                name: 'Sw 4',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              5: {
                id: 5,
                name: 'Sw 5',
                type: 'KNOB',
                state: {
                  active: false,
                  val: 2
                }
              },
              6: {
                id: 6,
                name: 'Sw 6',
                type: 'KNOB',
                state: {
                  active: false,
                  val: 2
                }
              }
            }
          },
          2: {
            id: 2,
            name: 'Switch Board 2',
            switches: {
              1: {
                id: 1,
                name: 'Sw 1',
                type: 'TOGGLE',
                state: {
                  active: true
                }
              },
              2: {
                id: 2,
                name: 'Sw 2',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              3: {
                id: 3,
                name: 'Sw 3',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              4: {
                id: 4,
                name: 'Sw 4',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              5: {
                id: 5,
                name: 'Sw 5',
                type: 'KNOB',
                state: {
                  active: false,
                  val: 2
                }
              },
              6: {
                id: 6,
                name: 'Sw 6',
                type: 'KNOB',
                state: {
                  active: false,
                  val: 2
                }
              }
            }
          },
          3: {
            id: 3,
            name: 'Switch Board 3',
            switches: {
              1: {
                id: 1,
                name: 'Sw 1',
                type: 'TOGGLE',
                state: {
                  active: true
                }
              },
              2: {
                id: 2,
                name: 'Sw 2',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              3: {
                id: 3,
                name: 'Sw 3',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              4: {
                id: 4,
                name: 'Sw 4',
                type: 'TOGGLE',
                state: {
                  active: false
                }
              },
              5: {
                id: 5,
                name: 'Sw 5',
                type: 'KNOB',
                state: {
                  active: false,
                  val: 2
                }
              },
              6: {
                id: 6,
                name: 'Sw 6',
                type: 'KNOB',
                state: {
                  active: false,
                  val: 2
                }
              }
            }
          }
        }
      }
    });

    // return $http({
    //   method: "GET",
    //   url: "myhome.com/"
    // })
    //   .then(function(response) {
    //     $log.log(response);
    //   })
    //   .catch(function(errRes) {
    //     $log.error(errRes);
    //   });
  }

  function _sendUpdate(id) {
    return $http({
      method: "GET",
      url: URL + id
    })
      .then(function(response) {
        $log.log(response);
      })
      .catch(function(errRes) {
        $log.error(errRes);
      });
  }

  return {
    getIntialState: _getIntialState,
    sendUpdate: _sendUpdate
  };
}

module.exports = MyDataService;
