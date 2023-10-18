import ALLImages from "./imagesdata";

class ProfileService{
   
    image = ALLImages('png106')

   static handleChange(ele){
       const [file] = ele.target.files;
       this.image =  URL.createObjectURL(file)
       this.returnImage()
   }

   static returnImage(){
        return this.image
   }

   static handleChangeUrl(link){
       this.image =  link
       this.returnImage()
   }
   
}
export default ProfileService;