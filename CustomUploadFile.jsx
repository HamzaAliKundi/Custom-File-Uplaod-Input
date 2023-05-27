import { MdCloudUpload, MdDelete } from "react-icons/md";

const [image, setImage] = useState(null);
const [fileName, setFileName] = useState(null);

  const candidateProfileHandler = (e) => {
    e.preventDefault();

    setShow(true);
    const apiUrl = ``;
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (fileName == null) return;
    const imageRef = ref(storage, `cv/${fileName.name}`);
    uploadBytes(imageRef, fileName).then((res) => {
      getDownloadURL(imageRef).then((url) => {
        console.log("Resume Url", url);

        const yourObj = [};

        try {
          axios.post(apiUrl, candidateProfile, config).then((res) => {
            setShow(false);
            toast.info("Candidate Profile Added Successfully ...");
            console.log("Resolved candidate profile resume : ", res);
          });
        } catch (error) {
          console.log("Errors", error);
        }
      });
    });
  };


 {/* Upload Filed */}
                        <div
                          className="form"
                          onClick={() =>
                            document.querySelector(".input-field").click()
                          }
                        >
                          <input
                            type="file"
                            accept="application/msword, application/pdf"
                            className="input-field"
                            hidden
                            onChange={(event) => {
                              setFileName(event.target.files[0]);
                              setImage(event.target.files[0].name);
                            }}
                          />
                          {image ? (
                            <>
                              <MdCloudUpload color="#1475cf" size={60} />
                              <p>{image}</p>
                            </>
                          ) : (
                            <>
                              <MdCloudUpload color="#1475cf" size={60} />
                              <p>Browse Resume type only doc & pdf to upload</p>
                            </>
                          )}
                        </div>
{/* Upload Filed */}