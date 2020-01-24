import * as actions from '../../../store/action/dogActions';

describe('dogActions', () => {
  it('Should create an action to set given breed', () => {
    const breed = 'hound';
    const expectedAction = {
      type: 'SET_BREED_SUCCESS',
      breed: breed
    };

    expect(actions.setBreedSuccess(breed)).toEqual(expectedAction);
  });

  it('Should create an action to fail setting breed', () => {
    const expectedAction = {
      type: 'SET_BREED_FAIL'
    };

    expect(actions.setBreedFail()).toEqual(expectedAction);
  });
});
