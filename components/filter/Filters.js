import Checkbox from "./Checkbox";

export default function Filters({categories, getSelectedCategories}){



return(
<div>
  {categories.map(category => <Checkbox key={category._id} label={category.name} id={category._id} getSelectedCategories={getSelectedCategories} />)}
</div>
)
}