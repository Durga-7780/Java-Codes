package servletprograms;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/Updatefile")
public class Updatefile extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		try {
			PrintWriter out=response.getWriter();
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase","root","123456");
			Statement st=con.createStatement();
			
			String mobem=request.getParameter("email");
			String user=request.getParameter("username");
			String fullname=request.getParameter("fullname");
			String passk=request.getParameter("pass");
			
			int c=0;
			ResultSet rs=st.executeQuery("select * from instasignup");
			while(rs.next())
			{
				String email=rs.getString(1);
				String username=rs.getString(3);
				if(email.equals(mobem))
				{
					out.print("mobile or email already exists");
					c=1;
					break;
				}
				if(user.equals(username))
				{
					out.print("username already exists");
					c=1;
					break;
				}
			}
			if(!rs.next() && c==0)
			{
			 st.executeUpdate("insert into instasignup values('"+mobem+"','"+fullname+"','"+user+"','"+passk+"')");
			 out.write("<html><body>");
			 out.write("<a href=\"insta.jsp\">Login</a>"+"</body>");
			 out.write("</html>");
			}
		}
		catch(Exception e) {}
	}

}
