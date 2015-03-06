import {Wrapper} from '../src/durelia';

describe('Durelia Wrapper tests', () => {
    it('should create a new instance with proper file path', () => {
        let amdFile = './test/amd/testmodule';
        let VM = new Wrapper(amdFile);

        expect(VM).toBeDefined();
        expect(VM.amdFile).toBe(amdFile);
    });

    it('should load custom View if provided', () => {
        let amdFile = './test/amd/testmodule';
        let viewName = '/path/to/specialView.html';
        let VM = new Wrapper(amdFile, viewName);

        expect(VM).toBeDefined();
        expect(VM.getViewStrategy()).toBe(viewName);
    });

    it('should execute canActivate properly', (done) => {
        let amdFile = './test/amd/testmodule';
        let VM = new Wrapper(amdFile);

        // simulate activation
        VM.canActivate().then( (result) => {
          expect(VM.variable).toBeDefined();
          done();
        });
    });
});