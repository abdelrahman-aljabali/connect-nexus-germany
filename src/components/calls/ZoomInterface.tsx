
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone,
  PhoneOff,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Monitor,
  Settings,
  Users,
  MessageSquare,
  X
} from "lucide-react";

interface ZoomInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ZoomInterface = ({ isOpen, onClose }: ZoomInterfaceProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [callDuration, setCallDuration] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
      
      return () => clearInterval(interval);
    } else {
      setCallDuration(0);
    }
  }, [isOpen]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold">Video-Anruf mit Unternehmen</h2>
          <span className="text-sm text-gray-300">{formatDuration(callDuration)}</span>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="text-white hover:bg-gray-700"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Main Video Area */}
      <div className="flex-1 relative bg-gray-900">
        {/* Main Video */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="text-center text-white">
            <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Users className="h-16 w-16 text-gray-400" />
            </div>
            <p className="text-xl font-semibold">Max Mustermann</p>
            <p className="text-gray-400">Geschäftsführer</p>
          </div>
        </div>

        {/* Self Video (Picture-in-Picture) */}
        <Card className="absolute top-4 right-4 w-48 h-36 bg-gray-800 border-gray-600 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-2 mx-auto">
                <Users className="h-8 w-8 text-blue-200" />
              </div>
              <p className="text-sm">Sie</p>
            </div>
          </div>
        </Card>

        {/* Participants Panel */}
        <div className="absolute top-4 left-4">
          <Card className="bg-gray-800/90 border-gray-600 p-3">
            <div className="flex items-center space-x-2 text-white">
              <Users className="h-4 w-4" />
              <span className="text-sm">2 Teilnehmer</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Control Bar */}
      <div className="bg-gray-800 p-4">
        <div className="flex justify-center items-center space-x-4">
          {/* Mute Button */}
          <Button
            variant={isMuted ? "destructive" : "secondary"}
            size="lg"
            className="rounded-full w-12 h-12"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>

          {/* Video Button */}
          <Button
            variant={isVideoOff ? "destructive" : "secondary"}
            size="lg"
            className="rounded-full w-12 h-12"
            onClick={() => setIsVideoOff(!isVideoOff)}
          >
            {isVideoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
          </Button>

          {/* Screen Share */}
          <Button variant="secondary" size="lg" className="rounded-full w-12 h-12">
            <Monitor className="h-5 w-5" />
          </Button>

          {/* Chat */}
          <Button variant="secondary" size="lg" className="rounded-full w-12 h-12">
            <MessageSquare className="h-5 w-5" />
          </Button>

          {/* Settings */}
          <Button variant="secondary" size="lg" className="rounded-full w-12 h-12">
            <Settings className="h-5 w-5" />
          </Button>

          {/* End Call */}
          <Button
            variant="destructive"
            size="lg"
            className="rounded-full w-12 h-12 bg-red-600 hover:bg-red-700"
            onClick={onClose}
          >
            <PhoneOff className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ZoomInterface;
