import { describe, expect, it, inject, async, TestComponentBuilder, ComponentFixture, addProviders } from '@angular/core/testing';
import { FormioComponent } from './formio.component';
import { FORMIO_BOOTSTRAP } from './bootstrap';
import { FORM } from './fixtures/forms/kitchensink';

describe('FormioComponent', () => {
    beforeEach(() => {
        addProviders([FORMIO_BOOTSTRAP]);
    })
    it('Should create the form and view children', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.createAsync(FormioComponent).then((fixture: ComponentFixture<FormioComponent>) => {
            let formio = fixture.componentInstance;
            formio.form = FORM;
            fixture.detectChanges();
            expect(fixture.nativeElement.querySelectorAll('formio-component').length).toEqual(FORM.components.length);
        });
    })));
});