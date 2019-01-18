import CounterStore from './CounterStore';
import MarketStore from './MarketStore';

class MarketCounterRootStore {
  constructor() {
    this.marketStore = new MarketStore(this);
    this.counterStore = new CounterStore(this);
  }
}

export default MarketCounterRootStore;
