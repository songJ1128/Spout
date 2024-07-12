export const handleMouseEnter = async (previewUrl, e, tooltipRef, audioRef) => {
    if (!previewUrl && tooltipRef.current) {
      const tooltip = tooltipRef.current;
      tooltip.style.display = 'block';
      tooltip.style.left = `${e.pageX + 10}px`;
      tooltip.style.top = `${e.pageY + 10}px`;
    } else if (previewUrl && audioRef.current) {
      try {
        await audioRef.current.pause(); // Pause the current audio 
        audioRef.current.src = previewUrl;
        await audioRef.current.play(); // Play the new audio
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  export const handleMouseLeave = (previewUrl, tooltipRef, audioRef) => {
    if (previewUrl && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'none';
    }
  };