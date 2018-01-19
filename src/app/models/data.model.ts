//
// Domain class
//
//  name: String,
//  timeStamp: String,
//  info[
//  energy: String,
//  alert:String
//  ]

export class Data {

  private _name: string;
  private _timeStamp: string;
  private _energy: string;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get name(): string {
    return this._name;
  }

  public set name(n: string) {
    this._name = n;
  }
  public get timeStamp(): string {
    return this._timeStamp;
  }

  public set timeStamp(n: string) {
    this._timeStamp = n;
  }
  public get energy(): string {
    return this._energy;
  }

  public set energy(n: string) {
    this._energy = n;
  }
}
