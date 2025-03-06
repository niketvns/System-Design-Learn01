import { useState } from "react";

const initialData = [
  {
    category: "Food",
    checked: false,
    subCategories: [
      {
        title: "Pizza",
        checked: false,
      },
      {
        title: "Burger",
        checked: false,
      },
      {
        title: "Chilli Paneer",
        checked: true,
      },
      {
        title: "Chapati",
        checked: false,
      },
      {
        title: "Matar Paneer",
        checked: false,
      },
    ],
  },
  {
    category: "Options",
    checked: false,
    subCategories: [
      {
        title: "Chatani",
        checked: false,
      },
      {
        title: "Sauces",
        checked: true,
      },
      {
        title: "Salad",
        checked: false,
      },
    ],
  },
  {
    category: "Restaurants",
    checked: false,
    subCategories: [
      {
        title: "Avadh Restaurant",
        checked: true,
      },
      {
        title: "Banaras Restaurant",
        checked: false,
      },
      {
        title: "Gazzab Restaurant",
        checked: true,
      },
      {
        title: "Haveli Restaurant",
        checked: false,
      },
    ],
  },
];

const CheckboxMCR = () => {
  const [data, setData] = useState(initialData);

  const handleCategoryChecked = (e, index) => {
    const newData = [...data];
    newData[index].checked = e.target.checked;
    newData[index].subCategories = newData[index].subCategories.map(
      (subCat) => ({
        ...subCat,
        checked: e.target.checked,
      })
    );

    setData(newData);
  };

  const handleSubCategoryChecked = (e, catIndex, subCatIndex) => {
    const newData = [...data];
    newData[catIndex].subCategories[subCatIndex].checked = e.target.checked;

    const isNotAllChecked = newData[catIndex].subCategories.some((subCat) => {
      return subCat.checked === false;
    });

    if (isNotAllChecked) {
      newData[catIndex].checked = false;
    } else {
      newData[catIndex].checked = true;
    }

    setData(newData);
  };

  return (
    <div className="flex flex-col gap-4">
      {data.map((obj, index) => {
        return (
          <div key={obj.category} className="flex flex-col gap-4 text-2xl">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={obj.checked}
                onChange={(e) => {
                  handleCategoryChecked(e, index);
                }}
              />
              <span>{obj.category}</span>
            </label>
            <div className="flex flex-col gap-4 pl-8 border-l-1">
              {obj.subCategories.map((subCat, subIndex) => {
                return (
                  <label key={subCat.title} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={subCat.checked}
                      onChange={(e) =>
                        handleSubCategoryChecked(e, index, subIndex)
                      }
                    />
                    <span>{subCat.title}</span>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxMCR;
