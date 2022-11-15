export default function FoodCuisines({ setSearchTags }) {
  return (
    <div className="container container--cuisines">
      <p className="p--inputs">
        Select a prefered cuisine (none for no preferation)
      </p>
      <select
        id="selectCuisine"
        onChange={(e) => {
          setSearchTags({
            checked: e.currentTarget.willValidate,
            value: e.currentTarget.value,
            type: e.currentTarget.id,
          });
          console.log(e.currentTarget);
        }}
      >
        <option value="">none</option>
        <option value="african">african</option>
        <option value="american">american</option>
        <option value="british">british</option>
        <option value="cajun">cajun</option>
        <option value="chinese">chinese</option>
        <option value="eastern european">eastern european</option>
        <option value="european">european</option>
        <option value="french">french</option>
        <option value="german">german</option>
        <option value="greek">greek</option>
        <option value="indian">indian</option>
        <option value="italian">italian</option>
        <option value="korean">korean</option>
        <option value="latin american">latin american</option>
        <option value="mediterranean">mediterranean</option>
        <option value="middle eastern">middle eastern</option>
        <option value="southern">southern</option>
        <option value="spanish">spanish</option>
        <option value="thai">thai</option>
        <option value="vietnamese">vietnamese</option>
      </select>

        African
        <input
          type="checkbox"
          id="african"
          value="african"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="american">
        American
        <input
          type="checkbox"
          id="american"
          value="american"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="british">
        British
        <input
          type="checkbox"
          id="british"
          value="british"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="cajun">
        Cajun
        <input
          type="checkbox"
          id="cajun"
          value="cajun"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="chinese">
        Chinese
        <input
          type="checkbox"
          id="chinese"
          value="chinese"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="eastern european">
        Eastern European
        <input
          type="checkbox"
          id="eastern european"
          value="eastern european"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="european">
        European
        <input
          type="checkbox"
          id="european"
          value="european"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="french">
        French
        <input
          type="checkbox"
          id="french"
          value="french"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="german">
        German
        <input
          type="checkbox"
          id="german"
          value="german"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="greek">
        Greek
        <input
          type="checkbox"
          id="greek"
          value="greek"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="indian">
        Indian
        <input
          type="checkbox"
          id="indian"
          value="indian"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="italian">
        Italian
        <input
          type="checkbox"
          id="italian"
          value="italian"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="jewish">
        Jewish
        <input
          type="checkbox"
          id="jewish"
          value="jewish"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="korean">
        Korean
        <input
          type="checkbox"
          id="korean"
          value="korean"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="latin american">
        Latin American
        <input
          type="checkbox"
          id="latin american"
          value="latin american"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="mediterranean">
        Mediterranean
        <input
          type="checkbox"
          id="mediterranean"
          value="mediterranean"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="middle eastern">
        Middle Eastern
        <input
          type="checkbox"
          id="middle eastern"
          value="middle eastern"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="southern">
        Southern
        <input
          type="checkbox"
          id="southern"
          value="southern"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="spanish">
        Spanish
        <input
          type="checkbox"
          id="spanish"
          value="spanish"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="thai">
        Thai
        <input
          type="checkbox"
          id="thai"
          value="thai"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="vietnamese">
        Vietnamese
        <input
          type="checkbox"
          id="vietnamese"
          value="vietnamese"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
    </div>
  );
}
