# DemoCon Thursday

Democon is our demonstration and conversation series designed for the broader audience including our business units. This platform enables us to make more personalized conversations with customers, stay on top of technology and transformations with real-life scenarios from within the system. Through interactive demonstrations and engaging discussions, we showcase our capabilities, share insights, and foster meaningful dialogues that drive innovation and customer success.

<div style="background: white; padding: 30px; border-radius: 12px; margin: 30px 0; border: 1px solid #e9ecef; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <div class="democon-carousel" style="position: relative; overflow: hidden; border-radius: 8px;">
        <div class="democon-slide" style="display: block;">
            <img src="../../../assets/media/DemoCon-1.png" alt="Democon 1" style="width: 100%; height: 500px; object-fit: contain;">
        </div>
        <div class="democon-slide" style="display: none;">
            <img src="../../../assets/media/DemoCon-4.png" alt="Democon 4" style="width: 100%; height: 500px; object-fit: contain;">
        </div>
        <div class="democon-slide" style="display: none;">
            <img src="../../../assets/media/DemoCon-5.png" alt="Democon 5" style="width: 100%; height: 500px; object-fit: contain;">
        </div>
        <div class="democon-slide" style="display: none;">
            <img src="../../../assets/media/DemoCon-6.png" alt="Democon 6" style="width: 100%; height: 500px; object-fit: contain;">
        </div>
        <div class="democon-slide" style="display: none;">
            <img src="../../../assets/media/DemoCon-7.png" alt="Democon 7" style="width: 100%; height: 500px; object-fit: contain;">
        </div>
        <div class="democon-slide" style="display: none;">
            <img src="../../../assets/media/DemoCon-8.png" alt="Democon 8" style="width: 100%; height: 500px; object-fit: contain;">
        </div>
        <div class="democon-slide" style="display: none;">
            <img src="../../../assets/media/DemoCon-10.png" alt="Democon 10" style="width: 100%; height: 500px; object-fit: contain;">
        </div>
        <div class="democon-slide" style="display: none;">
            <img src="../../../assets/media/DemoCon-11.png" alt="Democon 11" style="width: 100%; height: 500px; object-fit: contain;">
        </div>
        <div class="democon-slide" style="display: none;">
            <img src="../../../assets/media/DemoCon-12.png" alt="Democon 12" style="width: 100%; height: 500px; object-fit: contain;">
        </div>
        
        <button class="democon-nav-btn" onclick="changeDemoconSlide(-1)" style="position: absolute; top: 50%; left: 10px; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; cursor: pointer; border-radius: 50%; font-size: 14px;">❮</button>
        <button class="democon-nav-btn" onclick="changeDemoconSlide(1)" style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; cursor: pointer; border-radius: 50%; font-size: 14px;">❯</button>
        
        <div class="democon-dots" style="text-align: center; padding: 8px;">
            <span class="democon-dot active" onclick="currentDemoconSlide(1)" style="height: 8px; width: 8px; margin: 0 3px; background-color: #bbb; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
            <span class="democon-dot" onclick="currentDemoconSlide(2)" style="height: 8px; width: 8px; margin: 0 3px; background-color: #bbb; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
            <span class="democon-dot" onclick="currentDemoconSlide(3)" style="height: 8px; width: 8px; margin: 0 3px; background-color: #bbb; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
            <span class="democon-dot" onclick="currentDemoconSlide(4)" style="height: 8px; width: 8px; margin: 0 3px; background-color: #bbb; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
            <span class="democon-dot" onclick="currentDemoconSlide(5)" style="height: 8px; width: 8px; margin: 0 3px; background-color: #bbb; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
            <span class="democon-dot" onclick="currentDemoconSlide(6)" style="height: 8px; width: 8px; margin: 0 3px; background-color: #bbb; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
            <span class="democon-dot" onclick="currentDemoconSlide(7)" style="height: 8px; width: 8px; margin: 0 3px; background-color: #bbb; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
            <span class="democon-dot" onclick="currentDemoconSlide(8)" style="height: 8px; width: 8px; margin: 0 3px; background-color: #bbb; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
            <span class="democon-dot" onclick="currentDemoconSlide(9)" style="height: 8px; width: 8px; margin: 0 3px; background-color: #bbb; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
        </div>
    </div>
</div>

<script>
let democonSlideIndex = 1;
showDemoconSlides(democonSlideIndex);

function changeDemoconSlide(n) {
    showDemoconSlides(democonSlideIndex += n);
}

function currentDemoconSlide(n) {
    showDemoconSlides(democonSlideIndex = n);
}

function showDemoconSlides(n) {
    let i;
    let slides = document.getElementsByClassName("democon-slide");
    let dots = document.getElementsByClassName("democon-dot");
    
    if (n > slides.length) {democonSlideIndex = 1}
    if (n < 1) {democonSlideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[democonSlideIndex-1].style.display = "block";
    dots[democonSlideIndex-1].className += " active";
}

// Auto advance every 3 seconds
setInterval(function() {
    changeDemoconSlide(1);
}, 3000);
</script>

## 🎯 Key Areas

<div style="background: #f8f9fa; padding: 30px; border-radius: 12px; margin: 30px 0; border: 1px solid #e9ecef;">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h4 style="color: #333; margin-bottom: 15px;">🤖 GenAI-Driven Solutions</h4>
            <p style="color: #666; line-height: 1.6;">Generative AI applications, intelligent automation, and AI-powered workflows</p>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h4 style="color: #333; margin-bottom: 15px;">🤖 RPA & Automation</h4>
            <p style="color: #666; line-height: 1.6;">Robotic Process Automation, workflow automation, and process optimization</p>
        </div>
        

        
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h4 style="color: #333; margin-bottom: 15px;">☁️ Cloud Infrastructure</h4>
            <p style="color: #666; line-height: 1.6;">Cloud architecture, infrastructure design, and scalable solutions</p>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h4 style="color: #333; margin-bottom: 15px;">📊 Data Analytics</h4>
            <p style="color: #666; line-height: 1.6;">Data processing, analytics platforms, and business intelligence</p>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h4 style="color: #333; margin-bottom: 15px;">🔧 DevOps & Automation</h4>
            <p style="color: #666; line-height: 1.6;">CI/CD pipelines, automation tools, and deployment strategies</p>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h4 style="color: #333; margin-bottom: 15px;">🌐 Web Applications</h4>
            <p style="color: #666; line-height: 1.6;">Modern web development, frameworks, and user experience</p>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h4 style="color: #333; margin-bottom: 15px;">🔒 Security & Compliance</h4>
            <p style="color: #666; line-height: 1.6;">Security frameworks, compliance solutions, and risk management</p>
        </div>
    </div>
</div>
