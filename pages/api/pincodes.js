export default function handler(req, res) {
  let pincodes = {
    "335009": ["Surat", "Gujrat"],
    "110001": ["New Delhi", "Delhi"],
    "744101": ["Andaman Nicobar" ,"Islands"],
    "509210": ["Mahabub Nagar","Andhra Pradesh"],
    "792001": ["Lohit", "Andhra Pradesh"],
    "382715": ["Mahesana", "Gujarat"],
    "382460": ["Ahmedabad", "Gujarat"],
    "392110": ["Bharuch","Gujarat"],
    "360590": ["Porbandar","Gujarat"],
    "361003": ["Jamnagar","Gujarat"],
    "389190": ["Dahod", "Gujarat"],
    "385555": ["Banaskantha","Gujarat"],
    "391121": ["Anand", "Gujarat"],
    "396060": ["Navsari", "Gujarat"],
    "384265": ["Patan", "Gujarat"],
  };
  res.status(200).json(pincodes);
}
