
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ViewResume = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/01f6cbfb-2876-4206-8e4d-917b58d19ded.png';
    link.download = 'Samir_Makwana_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with back button and download */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Button 
            onClick={handleGoBack}
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <Button 
            onClick={handleDownloadResume}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>

      {/* Resume Display */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div 
          className="max-w-4xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/01f6cbfb-2876-4206-8e4d-917b58d19ded.png"
              alt="Samir Makwana Resume"
              className="w-full h-auto"
              style={{ imageRendering: 'crisp-edges', maxWidth: '100%', height: 'auto' }}
            />
          </div>
          
          {/* Download button below resume */}
          <div className="text-center mt-8">
            <Button 
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25 font-medium rounded-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ViewResume;
