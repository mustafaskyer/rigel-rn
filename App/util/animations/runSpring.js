import Animated, { Easing } from 'react-native-reanimated';
const {
  set,
  cond,
  eq,
  and,
  startClock,
  clockRunning,
  block,
  timing,
  Value,
  Clock,
  interpolate,
} = Animated;

export default function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(1),
    position: new Value(value),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(and(state.finished, eq(state.position, value)), [
      set(config.toValue, dest),
    ]),
    cond(clockRunning(clock), 0, startClock(clock)),
    timing(clock, state, config),
    state.position,
  ]);
}