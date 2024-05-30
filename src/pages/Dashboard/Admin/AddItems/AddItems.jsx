import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addMenuItem, uploadRecipeImage } from "../../../../utils/api";

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleAddItem = async (data) => {
    const { name, category, price, recipe } = data;

    const imageFile = { image: data.image[0] };
    const result = await uploadRecipeImage(imageFile);
    if (result?.success) {
      const image = result?.data?.url;
      const menuItem = {
        name,
        image,
        category,
        price: parseInt(price),
        recipe,
      };
      // console.log(menuItem);
      const result2 = await addMenuItem(menuItem);
      console.log(result2);
      if (result2?.insertedId) {
        toast.success("Item added successfully");
        reset();
      }
    } else {
      toast.error("Failed to add item");
    }
  };
  return (
    <section className="flex items-start w-full min-h-screen px-4 bg-gray-50">
      <div className="w-[1536px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        <div className="w-full mx-auto mt-[20px] mb-[80px] bg-white rounded-lg shadow ">
          <div className="p-6 sm:p-8">
            <h1 className="mb-6 text-xl font-bold leading-tight tracking-tight text-center text-gray-900 font-opensans md:text-2xl">
              Add a Recipe Item
            </h1>
            <form onSubmit={handleSubmit(handleAddItem)}>
              {/* recipe_name */}
              <div className="mb-3">
                <div className="grid grid-cols-1 gap-3">
                  <div className="col-span-1">
                    <label
                      htmlFor="name"
                      className="block mb-2 font-medium text-gray-900 text-md"
                    >
                      Recipe Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      {...register("name")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Enter recipe name.."
                      required
                    />
                  </div>
                </div>
              </div>
              {/* name */}

              {/* customization, time, status */}
              <div className="mb-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2 font-medium text-gray-900 text-md"
                    >
                      Category
                    </label>

                    <select
                      type="text"
                      name="category"
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      defaultValue="default"
                      {...register("category")}
                      required
                    >
                      <option disabled value={"default"}>
                        Select category
                      </option>
                      <option value={"salad"}>Salad</option>
                      <option value={"drinks"}>Drinks</option>
                      <option value={"dessert"}>Dessert</option>
                      <option value={"pizza"}>Pizza</option>
                      <option value={"soup"}>Soup</option>
                      <option value={"popular"}>Popular</option>
                      <option value={"offered"}>Offered</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="price"
                      className="block mb-2 font-medium text-gray-900 text-md"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      {...register("price")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Price"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* customization, time, status */}
              {/* description */}
              <div className="mb-3">
                <div className="grid grid-cols-1 gap-3">
                  <div className="col-span-1">
                    <label
                      htmlFor="recipe"
                      className="block mb-2 font-medium text-gray-900 text-md"
                    >
                      Recipe Details
                    </label>
                    <textarea
                      type="text"
                      name="recipe"
                      id="recipe"
                      {...register("recipe")}
                      className=" h-[150px] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Enter recipe details.."
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* description */}
              {/* upload */}
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="image"
                >
                  Recipe Image
                </label>
                <input
                  className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  id="image"
                  name="image"
                  type="file"
                  {...register("image")}
                  required
                ></input>
              </div>

              {/* upload */}

              <button
                type="submit"
                className="w-fit mr-auto px-[40px] my-3 text-white bg-black border border-gray-300 hover:bg-gray-50 hover:text-black transition-colors shadow-sm outline-none font-medium rounded-lg text-sm py-3 text-center "
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddItems;
