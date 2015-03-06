import {Metadata} from 'aurelia-framework';

export class Wrapper {
  static metadata(){ return Metadata.transient(); }

  constructor(amdFile, viewPath) {
    this.amdFile = amdFile;
    this.viewPath = viewPath;
  }

  canActivate() {
    return System.import(this.amdFile).then( (result) => {
      if(typeof result === 'function')
        Object.assign(this, new result());
      else
        Object.assign(this, result);

      return this.canActivate();
    }).catch( (error) => {
      console.log(error);
    });
  }

  getViewStrategy() {
    return this.viewPath;
  }
}

export function install(aurelia)
{
  aurelia.withInstance(Wrapper, Wrapper);
}
