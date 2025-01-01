
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
       <center>
      <p className="text-orange-300">Copyright &copy; {currentYear} Weaver's Wisdom. All rights reserved.</p></center>
    
      
    </footer>
  );
};

export default Footer;
