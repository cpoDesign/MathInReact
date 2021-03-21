export function speakersReducer(state,action) {

    function updateFavourite(favouriteValue){
      return state.map((item) => {
        if (item.id === action.sessionId) {
          item.favorite= favouriteValue ;
        }
        return item;
      });
    }

    switch (action.type) {
      case "setSpeakerList":{
        return action.data;
      }
      case "favourite":{
       return updateFavourite(true);
      }

      case "unfavourite":{
        return updateFavourite(false);
      }

      default:
        return state;
    }
  }
export default speakersReducer;