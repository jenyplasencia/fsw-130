import uuid from 'react-uuid'

export function addItem(id) {
  return {
    type: "ADD_CART_ITEM",
    payload: id
  }
}

export function deleteItem(id) {
  return {
    type: "DELETE_CART_ITEM",
    payload: id
  }
}

export function filterItem(option){
  return {
    type: "FILTER_ITEM",
    payload: option
  }
}

const initState = {
  items: [
    {
      name: "Nama Cold Press Juicer",
      sold: false,
      image: "https://namawell.com/products/vitality-5800?gclid=Cj0KCQjw38-DBhDpARIsADJ3kjnX7sayTo8U2gFquIFoRgxOLt9f7igqUsdQQpGNIQxN0pUqNgnrlwUaApWyEALw_wcB",
      colors: ["black", "White"],
      type: "Electronics",
      cost: 99.00,
      _id: uuid()
    },
    {
      name: "Ninja - Professional 72-Oz.",
      sold: false,
      image: "https://www.bestbuy.com/site/ninja-professional-72-oz-blender-black-silver/6001401.p?skuId=6001401&ref=212&loc=1&ref=212&loc=1&ds_rl=1260582&gclid=Cj0KCQjw38-DBhDpARIsADJ3kjkQB_T-pprqlc9EJQ_TXY46LfYs84t4hkeQvxiZWJiUC0_nPFiQktcaAm5fEALw_wcB&gclsrc=aw.ds",
      colors: ["Black", "White"],
      type: "Electronics",
      cost: 88.90,
      _id: uuid()
    },
    {
      name: "Cuisinart® Electric Knife Set ",
      sold: false,
      image: "https://www.bedbathandbeyond.com/store/product/cuisinart-reg-electric-knife-set-with-cutting-board/5417483?skuId=69093081&enginename=google&mcid=PS_googlepla_nonbrand_cutlery_local&product_id=69093081&adtype=pla&product_channel=local&adpos=&creative=356296492460&device=c&matchtype=&network=g&utm_campaignid=71700000053870720&utm_adgroupid=58700005143200947&targetid=92700045203754719&gclid=Cj0KCQjw38-DBhDpARIsADJ3kjl4HSd6zg_jTdtYpfP7Q5ylOd5PFnTmcHoQgzclo2qX5lL2wZb2Pk8aAgl7EALw_wcB&gclsrc=aw.ds&wmSkipPwa=1",
      colors: ["Black", "White"],
      type: "Electronics",
      cost: 55.00,
      _id: uuid()
    },
    {
      name: "Smart Meat Thermometer ",
      sold: false,
      image: "https://www.bestbuy.com/site/yummly-smart-meat-thermometer-white/6411809.p?skuId=6411809&ref=212&loc=1&ref=212&loc=1&gclid=Cj0KCQjw38-DBhDpARIsADJ3kjmNluRGcMX_KcXoWTYT40oJylhjGhT4RCYVU5s8_nFRd7a_kWuddg4aAoxVEALw_wcB&gclsrc=aw.ds",
      colors: ["Hollow Edition", "Collectors Edition"],
      type: "Games",
      cost: 78.90,
      _id: uuid()
    },
    {
      name: "Galaxy SMG5 #5 Electric Meat Grinder",
      sold: false,
      image: "https://cdnimg.webstaurantstore.com/images/products/xxl/132226/1899066.jpg",
      colors: ["Standard Edition", "Collectors Edition"],
      type: "Games",
      cost: 49.99,
      _id: uuid()
    },
    {
      name: "Black & Decker Electric Iron EK500B",
      sold: false,
      image: "https://i.ytimg.com/vi/RTfMuL8_7bs/maxresdefault.jpg",
      colors: ["Black", "White"],
      type: "Games",
      cost: 69.99,
      _id: uuid()
    },
    {
      name: "Recliner",
      sold: false,
      image: "https://content.valuecityfurniture.com/images/product/phoenix_black_recliner_2119013_794393.jpg?akimg=product-img-800x800&ak-trim=false",
      colors: ["Blue"],
      type: "Furniture",
      cost: 234.99,
      _id: uuid()
    },
    {
      name: "Patio Table",
      sold: false,
      image: "https://images.thdstatic.com/productImages/8d6b818a-c921-4c63-b0d3-433674aeb698/svn/stylewell-patio-dining-tables-fts61191-64_145.jpg",
      colors: ["Glass", "Blue"],
      type: "Furniture",
      cost: 999.99,
      _id: uuid()
    },
    {
      name: "Lawn Chair",
      sold: false,
      image: "https://cdni.llbean.net/is/image/wim/504592_37948_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2",
      colors: ["Blue", "Red", "Yellow"],
      type: "Furniture",
      cost: 24.99,
      _id: uuid()
    },
    {
      name: "Ham",
      sold: false,
      image: "https://www.mccrone.com/wp-content/uploads/2018/11/cs-ham.jpg",
      colors: ["Green", "Tan"],
      type: "Food",
      cost: 24.99,
      _id: uuid()
    },
    {
      name: "Eggs",
      sold: false,
      image: "https://images.unsplash.com/photo-1504283165217-3679a64511fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMHx8ZWdnc3xlbnwwfHx8fDE2MTc0MjEyOTI&ixlib=rb-1.2.1&q=80&w=1080",
      colors: ["Green", "White"],
      type: "Food",
      cost: 1.99,
      _id: uuid()
    }
  ],
  filteredItems: [],
  cart: []
}

export function itemsReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const oldArr = state.items
      const newArr = oldArr.filter(item => item._id === action.payload)
      console.log(newArr)
      return {
        ...state,
        cart: [...state.cart, newArr[0]]
      }
    case "DELETE_CART_ITEM":
      console.log('testing')
      const olArr = state.cart
      const index = olArr.findIndex(id => id._id === action.payload)
      olArr.splice(index, 1)
      return {
        ...state,
        cart: olArr
      }
    case "FILTER_ITEM":
      const oldArray = state.items
      const newArray = oldArray.filter(x => x.type === action.payload)
      return {
        ...state,
        filteredItems: newArray
      }
    default:
      return state
  }
}