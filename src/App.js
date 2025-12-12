import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <h1>Indian actors</h1>
      <div className="card">
      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfn08ejAil9wkgYAisbaYy-J2W1bRtP4cbVZRtFlmGR2brPUtetvWv2zb-JGwQI8shYfLha8jOXA_cOprGDtJW1A3IspUikLYaASBrggb&s=10"
        actorName="Prabhas"
        passage="Known for Baahubali, Salaar, and Adipurush."
      />

      <Cards
        link="https://m.media-amazon.com/images/M/MV5BYWI1NTIwZDYtNTdkMi00ZWE0LWE3MjktZGNkNzc0NTk2YTU3XkEyXkFqcGc@._V1_.jpg"
        actorName="Allu Arjun"
        passage="Star of Pushpa, Ala Vaikunthapurramuloo, Sarrainodu."
      />

      <Cards
        link="https://images.filmibeat.com/img/2022/11/ram-charan-look-cover-1572585987-1669620973.jpg"
        actorName="Ram Charan"
        passage="Famous for RRR, Magadheera, Rangasthalam."
      />

      <Cards
        link="https://www.sacnilk.com/image/bunnyimagenews.php?newsid=1000022881"
        actorName="Jr NTR"
        passage="Known for RRR, Janatha Garage, Temper."
      />

      <Cards
        link="https://img.etimg.com/thumb/width-420,height-315,imgsize-48094,resizemode-75,msid-125383289/magazines/panache/mahesh-babu-50-still-looks-like-a-25-year-old-his-trainer-shares-varanasi-stars-workout-and-diet-routine/mahesh-babu.jpg"
        actorName="Mahesh Babu"
        passage="Star of Srimanthudu, Pokiri, Bharat Ane Nenu."
      />

      <Cards
        link="https://media.newindianexpress.com/newindianexpress%2F2024-08-22%2Foqs2mqz6%2FC_53_1_CH1293_36085044.jpg?w=480&auto=format%2Ccompress&fit=max"
        actorName="Vijay"
        passage="Known for Master, Leo, Mersal."
      />

      <Cards
        link="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/05/ajith-kumar-149968155470-1525143225.jpg"
        actorName="Ajith Kumar"
        passage="Famous for Valimai, Mankatha, Viswasam."
      />

      <Cards
        link="https://thefederal.com/h-upload/2024/08/19/497707-rajinikanth-jailer"
        actorName="Rajinikanth"
        passage="Superstar known for Jailer, Robot, Kabali."
      />

      <Cards
        link="https://cdn.britannica.com/41/275541-050-F294CC2B/Bollywood-Actor-Kamal-Haasan-At-Jio-MAMI-Festival-Mumbai.jpg?w=400&h=300&c=crop"
        actorName="Kamal Haasan"
        passage="Known for Vikram, Indian, Dasavathaaram."
      />

      <Cards
        link="https://cdn.gulte.com/wp-content/uploads/2023/01/yash.jpg"
        actorName="Yash"
        passage="National fame for KGF 1 & 2."
      />

      <Cards
        link="https://media.assettype.com/tnm/import/sites/default/files/Suriya_Instagram_260722_1200.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
        actorName="Suriya"
        passage="Known for Jai Bhim, Singam series."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsGIjOHe0LOgaRdPlae8Z7GWpFBHnz6jKSzs1nqM6-aQGjoHvEYf5173bPD_D5XAENShxup9W3NFfG7kSD73sq0zYrHxQrntT7A3V6KOH&s=10"
        actorName="Vikram"
        passage="Known for Anniyan, I, Ponniyin Selvan."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFsGdN_nd6dsLQRcCVBOTyaBJi3LlO_eqZxAnXijP6W_QLqmbVFy6aPoTwDDhXCLuMDNkEbS4oxyHjO5qJ3ifPjQ8Wlx0wgGrMHrVJNNEww&s=10"
        actorName="Nani"
        passage="Known for Jersey, Dasara, Shyam Singha Roy."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKq7Y6p_JP7iR3CD7YgxFP9vRB3_OUwjvDCLK_5mNYyiZlvqi5Fq1rmRaa0l4MRHXExJkp1QFAbwINtj1VJGh8D75it6z4rA-4GZg9Avwz&s=10"
        actorName="Dhanush"
        passage="Known for Asuran, VIP, Atrangi Re."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZkq4ZygAfr9gwmFzELCysXhWqIhxOtpPv2zPBcsh2a2sdveIhMkvpIv9CtreTt8iFe-bLqNu77lp2PmDO4pUfHcxLc4bPZQVuuTkffTt&s=10"
        actorName="Hrithik Roshan"
        passage="Known for War, Krrish, Super 30."
      />
      </div>
    </div>
  );
}

export default App;
